

const express = require("express");

const {fetchTouristSpots, fetchTouristSpotById} = require("./controller");

const router = express.Router();

router.get("/", fetchTouristSpots);
router.get("/:id", fetchTouristSpotById);

module.exports = router;

