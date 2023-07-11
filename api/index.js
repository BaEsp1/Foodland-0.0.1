import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./src/routes/seedRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import Product from "./src/routes/products.js";
import orderRouter from "./src/routes/order.js";
import cors from "cors";
import path from "path";
import uploadRouter from "./src/routes/uploadRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://foodlandmarket.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/upload", uploadRouter);  
app.use("/api/products", Product);
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server iss running at http://localhost:${port}`);
});
