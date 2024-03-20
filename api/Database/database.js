require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const POSTGRES_URL  = process.env.POSTGRES_URL; 
const pg = require("pg");

//Inicio de Base de datos :
const sequelize = new Sequelize(POSTGRES_URL, {
  dialectModule: pg,
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true,
  },
});

// Selecciona los modelos de la carpeta Models:
const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos :
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Order, User, Product, Review } = sequelize.models;
  

// (async () => {
//   await sequelize.sync({ alter: true });
// })();

// // Lee el archivo JSON
// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Parsea el archivo JSON
//   const jsonData = JSON.parse(data);

//   Promise.all([
//     User.bulkCreate(jsonData.users),
//     Product.bulkCreate(jsonData.products)
//   ])
//     .then(() => {
//       console.log('Datos insertados correctamente');
//     })
//     .catch((error) => {
//       console.error('Error al insertar datos:', error);
//     });
// });

    // Relación de Order con User
    Order.belongsTo(User, { foreignKey: 'userId' });
  
    // Relación de Order con Product
    Order.hasMany(Product, { as: 'products', foreignKey: 'orderId' });
  
    // Relación de Product con Review
    Product.hasMany(Review, { as: 'reviews', foreignKey: 'productId' });
  
    // Relación de User con Review
    User.hasMany(Review, { as: 'reviews', foreignKey: 'userId' });


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};