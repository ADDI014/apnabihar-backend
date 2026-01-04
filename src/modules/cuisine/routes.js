

const express = require("express");
const {
  fetchCuisines,
  fetchCuisineById,
} = require("./controller");

const router = express.Router();

router.get("/", fetchCuisines);
router.get("/:id", fetchCuisineById);

module.exports = router;
