import express from "express";
import Product from "../models/product.js";
import expressAsyncHandler from "express-async-handler";
import { isAdmin, isAuth } from "../middlewares/middlewares.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();

  res.send({
    products,
  });
});

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    //const categories = await Product.find().distinct("category"); -->solo trae categorías
    const categories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          imageCategory: { $first: "$imageCategory" },
        },
      },
    ]);
    res.send(categories);
  })
);

productRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const {
      name,
      slug,
      image,
      price,
      category,
      brand,
      stock,
      rating,
      numReviews,
      description,
      imageCategory,
    } = req.body;
    const newProduct = new Product({
      name,
      slug,
      image:
        image ??
        "https://thumbs.dreamstime.com/z/concepto-creativo-de-la-comida-abstracta-con-la-col-y-el-pe-40423196.jpg",
      price,
      category,
      brand,
      stock,
      rating: rating ?? 0,
      numReviews: numReviews ?? 0,
      description,
      imageCategory:
        imageCategory ??
        "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
    });
    const product = await newProduct.save();
    res.send({ message: "Product Created", product });
  })
);

productRouter.put(
  "/customer/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const modStock = req.body.stock;

    const product = await Product.findById(productId);
    if (product) {
      product.stock = product.stock + modStock;
      await product.save();
      res.send({ message: "Product Stock Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const {
      active,
      name,
      slug,
      price,
      image,
      images,
      category,
      brand,
      stock,
      description,
      rating,
      numReviews,
      imageCategory,
    } = req.body;
    const product = await Product.findById(id);
    if (product) {
      product.active = active;
      product.name = name ?? product.name;
      product.slug = slug ?? product.slug;
      product.price = price ?? product.price;
      product.image = image ?? product.image;
      product.images = images ?? product.images;
      product.category = category ?? product.category;
      product.brand = brand ?? product.brand;
      product.stock = stock ?? product.stock;
      product.description = description ?? product.description;
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;
      product.imageCategory = imageCategory ?? product.imageCategory;
      await product.save();
      res.send({ message: "Product Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.get(
  "/slug/:id",
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next({ status: 404, message: "No se encontro el item" });
    }
    res.send(product);
  })
);

//Ruta para poster reviews
productRouter.post(
  "/:id/reviews",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      if (product.reviews.find((productReview) => productReview.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }
      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
