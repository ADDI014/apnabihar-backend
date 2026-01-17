const express = require("express");
const {
  fetchTemples,
  fetchTempleById,
  fetchTempleBySlug,
} = require("./controller");

const router = express.Router();

router.get("/", fetchTemples);
router.get("/slug/:slug", fetchTempleBySlug);
router.get("/:id", fetchTempleById);

module.exports = router;
