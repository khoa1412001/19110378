const express = require("express");
const router = express.Router();
const defaultController = require("../controllers/DefaultController");

router.get("/", defaultController.getAll);
module.exports = router;
