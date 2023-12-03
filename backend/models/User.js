// models/User.js

const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDB");
const bcrypt = require('bcrypt');

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING, // Use a length that accommodates the hashed password
    },
  },
  { timestamps: false }
);
  

module.exports = User;
