const express = require("express");
const router = express.Router();
const db = require("../config/db");
const userController = require("../controllers/userControllers");
const ProductController = require("../controllers/ProductControllers");

// get hompe page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// CRUD Routes for Users
// router.get("/users", userController.getUsers);
// router.post("/users", userController.createUser);
// router.put("/users/:id", userController.updateUser);
// router.delete("/users/:id", userController.deleteUser);

// Test Connection
router.get("/test-connection", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
});

module.exports = router;
