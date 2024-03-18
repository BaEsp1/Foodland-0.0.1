const express = require("express");
const dotenv = require("dotenv");
const seedRouter = require("./src/routes/seedRoutes.js");
const userRouter = require("./src/routes/userRoutes.js");
const Product = require("./src/routes/products.js");
const orderRouter = require("./src/routes/order.js");
const cors = require("cors");
const uploadRouter = require("./src/routes/uploadRoute.js");
const { conn } = require('./Database/database.js');
const port = process.env.PORT || 5000;


dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api/upload", uploadRouter);  
app.use("/api/products", Product);
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || "sb");
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

(async () => {
  try {
    await conn.sync({ alter: true });
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error sincronizando la base de datos:', error);
  }

  // Aquí el resto de tu código de inicialización del servidor
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
})();
