const express = require("express");
const {
  fetchAllTouristSpots,
  fetchTouristSpotById,
  fetchTouristSpotBySlug,
} = require("./controller");

const router = express.Router();

router.get("/", fetchAllTouristSpots);
router.get("/slug/:slug", fetchTouristSpotBySlug);
router.get("/:id", fetchTouristSpotById);

module.exports = router;
