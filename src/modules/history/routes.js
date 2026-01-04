const express = require("express");
const {
  fetchHistory,
  fetchHistoryById,
  getHistoryBySlug
} = require("./controller");

const router = express.Router();

router.get("/", fetchHistory);
router.get("/slug/:slug", getHistoryBySlug);
router.get("/:id", fetchHistoryById);

module.exports = router;
