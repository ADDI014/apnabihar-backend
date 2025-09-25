const express = require("express");

const router = express.Router();

const {getTouristSpots} = require("../controllers/touristSpotController");

router.get("/", getTouristSpots);

module.exports = router;

