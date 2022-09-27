const express = require("express");
const router = express.Router();
const messageController = require("../controllers/MessageController");

router.get("/:id", messageController.getDetailID);
router.get("/", messageController.getAll);
module.exports = router;
