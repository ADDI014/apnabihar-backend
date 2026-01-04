
const express = require("express");

const {fetchClothes , fetchClothesById, getClothesBySlug} = require("./controller");


const router = express.Router();

router.get("/",fetchClothes);
router.get("/slug/:slug", getClothesBySlug);
router.get("/:id", fetchClothesById);

module.exports = router;