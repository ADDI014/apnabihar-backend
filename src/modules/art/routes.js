
const express = require("express");

const {fetchArts, fetchArtById, getArtBySlug} = require("./controller");

const router = express.Router();

router.get("/",fetchArts);
router.get("/slug/:slug", getArtBySlug);
router.get("/:id", fetchArtById);

module.exports = router;