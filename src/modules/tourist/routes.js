

const express = require("express");

const {fetchTouristSpots, fetchTouristSpotById, getTouristSpotBySlug} = require("./controller");

const router = express.Router();

router.get("/", fetchTouristSpots);
router.get("/slug/:slug", getTouristSpotBySlug);
router.get("/:id", fetchTouristSpotById);

module.exports = router;

