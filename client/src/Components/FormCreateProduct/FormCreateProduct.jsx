/* ========================* IMPORT GENERALES  *======================== */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/productActions";
// import {Link} from "react-router-dom"
// import axios from "axios";
import swal from "sweetalert";
import Axios from "axios";

/* ========================* IMPORT VALIDACIONES  *======================== */
import {
  ValidateName,
  ValidateBrand,
  ValidateCategory,
  ValidateDescription,
  ValidatePrice,
  ValidateSlug,
  ValidateStock,
} from "./Validations";

/* ========================* IMPORT STYLES  *======================== */
import "../FormCreateProduct/FormCreateProduct.css";

/* ========================* ESTADO LOCAL  *======================== */
//import { getAllCategories, addCategory } from "../../redux/actions";
//nueva importación con store2. AddCategory no se está usando
import { getAllCategories } from "../../redux/actions/productActions";

function FormCreateProduct() {

  const URL = "https://foodland-production.up.railway.app";


  /* ========================* ESTADO LOCAL  *======================== */
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    price: 0,
    category: "",
    brand: "",
    stock: 0,
    description: "",
    image: "",
  });

  // const [image, setImage] = useState("");
  const [errorUpload, setErrorUpload] = useState("");
  const [successUpload, setSuccessUpload] = useState("");

  const [errors, setErrors] = useState({});

  // const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  // const [newCategoryInputValue, setNewCategoryInputValue] = useState("");

  /* ========================* FUNCION PARA QUE CAMBIEN EL VALUE *======================== */
  const handleChange = (event, cb) => {
    const { name, slug, price, category, brand, stock, description, value } =
      event.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: cb(value),
      [slug]: cb(value),
      [price]: cb(value),
      [category]: cb(value),
      [brand]: cb(value),
      [stock]: cb(value),
      [description]: cb(value),
    });
    // if (value === "New category") {
    //   setShowNewCategoryInput(true);
    // } else {
    //   setShowNewCategoryInput(false);
    // }
  };

  // const handleNewCategoryInputChange = (event) => {
  //   setNewCategoryInputValue(event.target.value);
  //   setProduct({ ...product, category: event.target.value });
  // };

  /* ========================* FUNCION PARA QUE SE ENVIEN *======================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData, product);
    try {
      dispatch(createProduct(product));
      // await axios
      //   .put(`${URL}/api/products/${product._id}`, formData)
      //   .then((res) => console.log(res));
      setProduct({
        // active: "",
        name: "",
        slug: "",
        price: 0,
        category: "",
        brand: "",
        stock: 0,
        description: "",
        image: "",
      });
      swal({
        title: "The product was created successfully",
        icon: "success",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      setTimeout(() => {
        window.location.replace("/");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  //Traigo el token del usuario
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //Funcion para subir la imagen
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);

    try {
      const { data } = await Axios.post(`${URL}/api/upload`, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log(data.url);
      setProduct({ ...product, image: data.url });
      setSuccessUpload("Image loaded successfully to Cloudinary");
    } catch (error) {
      setErrorUpload(error.message);
    }
  };

  return (
    /* ================== * CONTENEDOR GENERAL * ================== */
    <div className="formProductContainer">
      {/* ================== * CONTENEDOR FORMULARIO * ================== */}
      <form className="formCreate" onSubmit={handleSubmit}>
        {/* ================== * NOMBRE * ================== */}
        <div className="labelContainer">
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              value={product.name}
              onChange={(e) => handleChange(e, ValidateName)}
              name="name"
            />
          </label>
          {errors["name"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.name?.message}</p>
          )}
        </div>
        {/* ================== * SLUG * ================== */}
        <div className="labelContainer">
          <label className="label">
            Slug
            <input
              className="input"
              type="text"
              value={product.slug}
              onChange={(e) => handleChange(e, ValidateSlug)}
              name="slug"
            />
          </label>
          {errors["slug"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.slug?.message}</p>
          )}
        </div>
        {/* ================== * PRECIO * ================== */}
        <div className="labelContainer">
          <label className="label">
            Price
            <input
              className="input"
              type="number"
              value={product.price}
              onChange={(e) => handleChange(e, ValidatePrice)}
              name="price"
              min={0.1}
            />
          </label>
          {errors["price"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.price?.message}</p>
          )}
        </div>
        {/* ================== * CATEGORIA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Category
            <select
              className="input"
              name="category"
              value={product.category}
              onChange={(e) => handleChange(e, ValidateCategory)}
            >
              <option value="0">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category._id}
                </option>
              ))}
            </select>
          </label>
          {errors["category"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.category?.message}</p>
          )}
        </div>
        {/* ================== * MARCA * ================== */}
        <div className="labelContainer">
          <label className="label">
            Brand
            <input
              className="input"
              type="text"
              value={product.brand}
              onChange={(e) => handleChange(e, ValidateBrand)}
              name="brand"
            />
          </label>
          {errors["brand"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.brand?.message}</p>
          )}
        </div>
        {/* ================== * IMAGEN * ================== */}
        <div className="labelContainer">
          <label className="label">
            Image
            <input
              className="input"
              type="file"
              onChange={uploadFileHandler}
              name="image"
            />
          </label>
          {errorUpload && errorUpload}
          {successUpload && successUpload}
          {errors["image"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.image?.message}</p>
          )}
        </div>
        {/* ================== * STOCK * ================== */}
        <div className="labelContainer">
          <label className="label">
            Stock
            <input
              className="input"
              type="number"
              value={product.stock}
              onChange={(e) => handleChange(e, ValidateStock)}
              name="stock"
              min={1}
            />
          </label>
          {errors["stock"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.stock?.message}</p>
          )}
        </div>
        {/* ================== * DESCRIPCION * ================== */}
        <div className="labelContainer">
          <label className="label">
            Description
            <textarea
              className="inputDescription"
              value={product.description}
              onChange={(e) => handleChange(e, ValidateDescription)}
              name="description"
            />
          </label>
          {errors["description"]?.isValidation ? null : (
            <p className="errorFormCP">{errors?.description?.message}</p>
          )}
        </div>
        {/* ================== * Vista Previa * ================== */}
        <div className="vistaPrevia">
          <div className="vsTitulo">
            <h1>Product preview</h1>
          </div>
          <div className="vsContent">
            <div>
              <h2>{product.name}</h2>
              <h2>${product.price}</h2>
              <h2>{product.category}</h2>
              <h2>{product.brand}</h2>
            </div>
            <img className="vsImg" src={product.image}/>
          </div>
        </div>
        {/* ================== * BOTON DE CREAR * ================== */}
        <div className="btnContainer">
          <button className="btn" type="submit">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCreateProduct;
