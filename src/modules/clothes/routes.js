const express = require("express");
const {
  fetchClothes,
  fetchClothesById,
  fetchClothesBySlug,
} = require("./controller");

const router = express.Router();

router.get("/", fetchClothes);
router.get("/slug/:slug", fetchClothesBySlug);
router.get("/:id", fetchClothesById);

module.exports = router;
