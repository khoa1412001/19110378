const express = require("express");
const router = express.Router();
const mssvController = require("../controllers/MSSVController");
router.post("/", mssvController.addSV);
router.get("/:id", mssvController.getSV);
module.exports = router;
