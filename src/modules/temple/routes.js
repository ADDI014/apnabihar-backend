
const express = require("express");

const {
    fetchTemples,
    fetchTempleById,
    getTempleBySlug,
} = require("./controller");


const router = express.Router();

router.get("/", fetchTemples);
router.get("/slug/:slug", getTempleBySlug);
router.get("/:id", fetchTempleById);

module.exports = router;