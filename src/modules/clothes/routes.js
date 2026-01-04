
const express = require("express");

const {fetchClothes , fetchClothesById} = require("./controller");
const { fetchArtById } = require("../art/controller");

const router = express.Router();

router.get("/",fetchClothes);
router.get("/:id", fetchClothesById);

module.exports = router;