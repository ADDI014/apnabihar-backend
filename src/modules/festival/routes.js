const express = require("express");

const {fetchFestivals, fetchFestivalById,getFestivalBySlug } = require("./controller");

const router = express.Router();

router.get("/", fetchFestivals);
router.get("/slug/:slug", getFestivalBySlug);
router.get("/:id", fetchFestivalById);

module.exports = router;

