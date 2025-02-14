const express = require("express");
const router = express.Router();
const ProductControllers = require("../controllers/ProductControllers");
const db = require("../config/db");

// CRUD Routes for Products
router.get("/products", ProductControllers.getProducts);
router.post("/products", ProductControllers.createProducts);
router.put("/products/:id", ProductControllers.updateProducts);
router.delete("/products/:id", ProductControllers.deleteProducts);

module.exports = router;
