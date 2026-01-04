const express = require("express");
const {
  fetchHistory,
  fetchHistoryById,
} = require("./controller");

const router = express.Router();

router.get("/", fetchHistory);
router.get("/:id", fetchHistoryById);

module.exports = router;
