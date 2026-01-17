const express = require("express");
const {
  fetchCuisines,
  fetchCuisineById,
  getCuisineBySlug,
} = require("./controller");

const router = express.Router();

router.get("/", fetchCuisines);
router.get("/slug/:slug", getCuisineBySlug);
router.get("/:id", fetchCuisineById);

module.exports = router;
