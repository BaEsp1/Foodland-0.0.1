const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
  sequelize.define('order',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shippingAddress: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentResult: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  itemsPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  shippingPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  taxPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  paidAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isDelivered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deliveredAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {timestamps: true,});
}

