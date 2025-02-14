// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers"); // sesuaikan path dengan folder controllers

// Hubungkan controller dengan rute
router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/users/:id", userControllers.deleteUser);

// router.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });

// router.get("/products/:id", (req, res) => {
//   const productId = req.params.id;
//   res.send(`Product ID: ${productId}`);
// });

module.exports = router;
