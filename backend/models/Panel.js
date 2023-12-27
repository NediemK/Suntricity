// models/User.js

const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDB");
const bcrypt = require('bcrypt');

const Panel = sequelize.define(
  "panels",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    wattage: {
      type: DataTypes.STRING, // Use a length that accommodates the hashed password
    },
  },
  { timestamps: false }
);
  

module.exports = Panel;
