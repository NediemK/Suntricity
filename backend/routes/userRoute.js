const express = require("express");
const userRoute = express.Router();
const db = require('../models/User'); // Assuming you have a models folder with your database models

const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
  loginUser,
} = require("../controllers/userController");

// CRUD operations for users
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", getOneUser);
userRoute.post("/users", postUser);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id", deleteUser);

// Login route - Use userRoute instead of router
userRoute.post('/login', loginUser);

module.exports = userRoute;
