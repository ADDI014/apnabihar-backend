
const express = require("express");

const {fetchArts, fetchArtById} = require("./controller");

const router = express.Router();

router.get("/",fetchArts);

router.get("/:id", fetchArtById);

module.exports = router