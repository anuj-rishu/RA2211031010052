const express = require("express");
const router = express.Router();
const numberController = require("../controllers/numberController");

router.get("/numbers/:id", (req, res) => numberController.getNumbers(req, res));

module.exports = router;
