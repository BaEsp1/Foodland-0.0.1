import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user.js";
import { generateToken, isAdmin, isAuth } from "../middlewares/middlewares.js";
import nodemailer from "nodemailer";
const userRouter = express.Router();

//Ruta para que el Admin pueda traer todos los usuarios
userRouter.get(
	"/",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	})
);

//Ruta para que el Admin pueda traer un usuario
userRouter.get(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	})
);

//Ruta para que el usuario actualice sus datos
userRouter.put(
	"/profile/:id",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		console.log(user, req.body.user.name, req.body.user, "NAME");
		if (user) {
			user.name =
				req.body.user.name.length > 0 ? req.body.user.name : user.name;
			user.email =
				req.body.user.email.length > 0 ? req.body.user.email : user.email;
			user.password =
				req.body.user.password.length > 0
					? bcrypt.hashSync(req.body.user.password, 8)
					: user.password;
			const updatedUser = await user.save();
			console.log(updatedUser, "userUpdate");
			res.send({ message: "User Updated", user: updatedUser });
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	})
);

//Ruta para que el admin actualice un usuario
userRouter.put(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			user.name = req.body.name || user.name;
			user.email = req.body.email || user.email;
			user.isAdmin = Boolean(req.body.isAdmin);
			user.active = Boolean(req.body.active);
			const updatedUser = await user.save();
			res.send({ message: "User Updated", user: updatedUser });
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	})
);

//Ruta para loguearse
userRouter.post(
	"/signin",
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
				return;
			}
		}

		res.status(401).send({ message: "Invalid email or password" });
	})
);

// configuracion para envio de mail

let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: "foodland.henry@gmail.com",
		pass: "eofcyzqwebqksbvu",
	},
});

//Ruta para crear usuario
userRouter.post(
	"/signup",
	expressAsyncHandler(async (req, res) => {
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) {
			res.status(400).send({ message: "You have already been registered. Please Sign In with GOOGLE." });
			return;
		}
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
		});
		const createdUser = await user.save();
		const mailOptions = {
			from: "foodland.henry@gmail.com",
			to: req.body.email,
			subject: "CONFIRMACION DE REGISTRO FOODLAND",
			html: `
        <h2>Bienvenido a nuestro supermercado</h2>
        <p>Hola ${req.body.name},</p>
        <p>¡Gracias por registrarte en nuestro supermercado! Tu cuenta ha sido creada exitosamente con el mail ${req.body.email}.</p>
        <p>Estamos emocionados de tenerte como parte de nuestra comunidad. Esperamos que disfrutes de nuestras ofertas y servicios.</p>
        <p>¡Bienvenido y feliz compra!</p>
        <p>Equipo del Supermercado</p>
        
        `,
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("email sent succesfuly ");
			}
		});
		res.send({
			_id: createdUser._id,
			name: createdUser.name,
			email: createdUser.email,
			isAdmin: createdUser.isAdmin,
			active: createdUser.active,
			token: generateToken(createdUser),
		});
	})
);

//Ruta para que el admin borre usuario
userRouter.delete(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			if (user.email === "admin@gmail.com") {
				res.status(400).send({ message: "Cannot Delete Admin User" });
				return;
			}
			const deletedUser = await user.remove();
			res.send({ message: "User Deleted Successfully", user: deletedUser });
		} else {
			res.status(404).send({ message: "User Not Found" });
		}
	})
);

export default userRouter;
