const express = require('express');
const { User, Product } = require("../../Database/database.js");
const data = require('../assets/data.js');

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});



module.exports = seedRouter;