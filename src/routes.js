

const express = require("express");
const artRoutes = require("./modules/art/routes");
const cuisineRoutes = require("./modules/cuisine/routes");
const touristRoutes = require("./modules/tourist/routes")
const festivalRoutes = require("./modules/festival/routes");
const historyRoutes = require("./modules/history/routes");
const templeRoutes = require("./modules/temple/routes");
const clothesRoutes = require("./modules/clothes/routes");
const searchRoutes = require("./modules/search/routes");

const router = express.Router();

router.use("/search", searchRoutes);

router.use("/arts", artRoutes);
router.use("/cuisines", cuisineRoutes);
router.use("/tourist-spots", touristRoutes);
router.use("/festivals" , festivalRoutes);
router.use("/history", historyRoutes);
router.use("/temples", templeRoutes);
router.use("/clothes", clothesRoutes);



module.exports = router;

