import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.js";
import { isAuth, isAdmin } from "../middlewares/middlewares.js";
import User from "../models/user.js";
import Product from "../models/product.js";
import nodemailer from "nodemailer";

const orderRouter = express.Router();

// FUNCION PARA AGREGAR A LA RUTA QUE CONFIRMA LA ORDEN Y ENVIA EL MAIL DE CONFIRMACION
/*
const mailOptions = {
	from:"foodland.henry@gmail.com",
	to:req.body.email,
	subject:"CONFIRMACION DE REGISTRO FOODLAND",
	html: `
	<h2> Estimado [Nombre del Cliente] </h2>

	<p>Gracias por elegir Supermercado XYZ. Nos complace confirmar que hemos recibido tu pedido y estamos procesándolo. A continuación, te proporcionamos los detalles de tu pedido: </p>
	
	<p> Número de pedido: #123456 </p>
	<p>Fecha del pedido: [Fecha del pedido] </p>
	<p>Dirección de entrega: [Dirección de entrega] </p>
	
	<h3>Detalles del pedido:</h3>
	
	<p>Producto 1: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
	<p>Producto 2: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
	<p> Producto 3: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
	...
	<p>Total del pedido: [Total] </p>
	
	<p> Método de pago: [Método de pago seleccionado] </p>
	
	<p>Si tienes alguna pregunta o necesitas realizar alguna modificación en tu pedido, no dudes en comunicarte con nuestro servicio de atención al cliente al [número de contacto] o responder a este correo electrónico. Estaremos encantados de asistirte.</p>
	  `,
	};
	transporter.sendMail(mailOptions, function(error,info){
	  if (error){
		console.log(error)
	  } else{
		console.log("email sent succesfuly ")
	  }
	}) */

//CONFIGURACION PARA ENVIO DE MAILS

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "foodland.henry@gmail.com",
    pass: "eofcyzqwebqksbvu",
  },
});

const mailOptions = {
  from:"foodland.henry@gmail.com",
  to:"sofiaperone62@gmail.com",
  subject:"CONFIRMACION DE REGISTRO FOODLAND",
  html: `
  <h2> Estimado [Nombre del Cliente] </h2>

  <p>Gracias por elegir Supermercado XYZ. Nos complace confirmar que hemos recibido tu pedido y estamos procesándolo. A continuación, te proporcionamos los detalles de tu pedido: </p>
  
  <p> Número de pedido: #123456 </p>
  <p>Fecha del pedido: [Fecha del pedido] </p>
  <p>Dirección de entrega: [Dirección de entrega] </p>
  
  <h3>Detalles del pedido:</h3>
  
  <p>Producto 1: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
  <p>Producto 2: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
  <p> Producto 3: Cantidad: [Cantidad], Precio unitario: [Precio] </p>
  ...
  <p>Total del pedido: [Total] </p>
  
  <p> Método de pago: [Método de pago seleccionado] </p>
  
  <p>Si tienes alguna pregunta o necesitas realizar alguna modificación en tu pedido, no dudes en comunicarte con nuestro servicio de atención al cliente al [número de contacto] o responder a este correo electrónico. Estaremos encantados de asistirte.</p>
    `,
  };

//Ruta para que el Admin reciba todas las órdenes de compra
orderRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find().populate("user", "name");
    res.send(orders);
  })
);

//Ruta para que el usuario cree una orden de compra
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
   
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x.id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order });
  })
);

orderRouter.post(
  "/email",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body.email)
    const orderItems = req.body.orderItems
    const formattedItems = orderItems.map(item => `<p>${item.name}: Cantidad: ${item.quantity}, Precio unitario: ${item.price}</p>`);
    const mailOptions = {
      from:"foodland.henry@gmail.com",
      to:req.body.email , 
      subject:"CONFIRMACION DE REGISTRO FOODLAND",
      html: `
      <h2> Estimado ${req.body.name} </h2>
    
      <p>Gracias por elegir Supermercado XYZ. Nos complace confirmar que hemos recibido tu pedido y estamos procesándolo. A continuación, te proporcionamos los detalles de tu pedido: </p>
      
      <p> Número de pedido: #123456 </p>

      <p>Dirección de entrega: ${req.body.shippingAddress} </p>
      
      <h3>Detalles del pedido:</h3>
      
    ${formattedItems}
      ...
      <p>Total del pedido:$ ${req.body.totalPrice} </p>
      
      <p> Método de pago: ${req.body.paymentMethod} </p>
      
      <p>Si tienes alguna pregunta o necesitas realizar alguna modificación en tu pedido, no dudes en comunicarte con nuestro servicio de atención al cliente al [número de contacto] o responder a este correo electrónico. Estaremos encantados de asistirte.</p>
        `,
      };
    
      transporter.sendMail(mailOptions, function(error,info){
        if (error){
        console.log(error)
        } else{
        console.log("email sent succesfuly ")
        }
      })
   
    res.status(201).send({ message: "sent" });
  })
);

/*orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		if (req.body.orderItems.length === 0) {
			res.status(400).send({ message: "Cart is empty" });
		} else {
			const order = new Order({
				seller: req.body.orderItems[0].seller,
				orderItems: req.body.orderItems,
				shippingAddress: req.body.shippingAddress,
				paymentMethod: req.body.paymentMethod,
				itemsPrice: req.body.itemsPrice,
				shippingPrice: req.body.shippingPrice,
				taxPrice: req.body.taxPrice,
				totalPrice: req.body.totalPrice,
				user: req.user._id,
			});
			const createdOrder = await order.save();
			res
				.status(201)
				.send({ message: "New Order Created", order: createdOrder });
		}
	})
);*/

//Ruta por si hacemos un dashboard del admin
orderRouter.get(
  "/summary",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: "$totalPrice" },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          orders: { $sum: 1 },
          sales: { $sum: "$totalPrice" },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, orders, dailyOrders, productCategories });
  })
);

//Ruta que le manda al usuario todas sus ordenes de compra
orderRouter.get(
  "/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

//Ruta que manda la orden segun id
orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

//Ruta para marcar la orden como paga despues de Paypal
orderRouter.put(
  "/:id/pay",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      const descriptionOrder = updatedOrder.orderItems
        .map((product) => {
          return `${product.name}: cantidad: ${product.quantity}, Precio unitario: ${product.price}.`;
        })
        .join("\n");
      const mailOptions = {
        from: "foodland.henry@gmail.com",
        to: req.body.email,
        subject: "CONFIRMACION DE PAGO DE SU PEDIDO",
        html: `
		  <h2> Estimado ${updatedOrder.shippingAddress.fullName} </h2>
		
		  <p>Gracias por elegir Supermercado XYZ. Nos complace confirmar que hemos recibido el pago de su pedido. A continuación, te proporcionamos los detalles de tu pedido: </p>
		  <br/>
		  <p> Número de pedido: ${updatedOrder._id} </p>
		  <p>Fecha del pago pedido: ${updatedOrder.paymentResult.update_time} </p>
		  <p>Dirección de entrega: ${updatedOrder.shippingAddress.address}, en la ciudad ${updatedOrder.shippingAddress.city} </p>
		  
		  <h3>Detalles del pedido:</h3>
		  
		  ${descriptionOrder}
		 
		  <p>Total del pedido: ${updatedOrder.totalPrice} </p>
		  
		  <p> Método de pago: ${updatedOrder.paymentMethod} </p>
		  
		  <p>Si tienes alguna pregunta o necesitas realizar alguna modificación en tu pedido, no dudes en comunicarte con nuestro servicio de atención al cliente al [número de contacto] o responder a este correo electrónico. Estaremos encantados de asistirte.</p>
			`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("email sent succesfuly ");
        }
      });
      res.send({ message: "Order Paid", order: updatedOrder });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

//Ruta en donde el Admin registra que se despachó una orden
orderRouter.put(
  "/:id/deliver",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      await order.save();
      res.send({ message: "Order Delivered" });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

//Ruta que usa el Admin para dar de baja una orden
orderRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const [deleted] = await order.update({
        active: false,
      });
      console.log(`${deleted} order marked as inactive`);
      res.send({ message: "Order Deleted" });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default orderRouter;
