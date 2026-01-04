const express = require("express");

const {fetchFestivals, fetchFestivalById} = require("./controller");

const router = express.Router();

router.get("/", fetchFestivals);
router.get("/:id", fetchFestivalById);

module.exports = router;

