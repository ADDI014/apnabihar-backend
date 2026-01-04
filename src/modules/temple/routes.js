
const express = require("express");

const {
    fetchTemples,
    fetchTempleById,
} = require("./controller");


const router = express.Router();

router.get("/", fetchTemples);
router.get("/:id", fetchTempleById);

module.exports = router;