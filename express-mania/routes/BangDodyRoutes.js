const express = require("express");
const router = express.Router();
const bang_dody = require("../controllers/BangDodyControllers");
const db = require("../config/db");

// Hubungkan controller dengan rute
router.get("/bang_dody", bang_dody.getbang_dody);
router.post("/bang_dody", bang_dody.createbang_dody);
router.put("/bang_dody/:id", bang_dody.updatebang_dody);
router.delete("/bang_dody/:id", bang_dody.deletebang_dody);

module.exports = router;
