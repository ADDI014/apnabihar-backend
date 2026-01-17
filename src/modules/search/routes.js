const express = require("express");
const { searchAll } = require("./controller");

const router = express.Router();

router.get("/", searchAll);

module.exports = router;
