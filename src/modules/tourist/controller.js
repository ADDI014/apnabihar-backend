
const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const {getAllTouristSpots, getTouristSpotById} = require("./service");
const TouristSpot = require("./model");

const fetchAllTouristSpots = asyncHandler(async (req,res) => {
    const result = await getAllTouristSpots(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    )
})


const fetchTouristSpotById = asyncHandler(async (req,res) => {
    const spot = await getTouristSpotById(req.params.id);

    res.json(
        new ApiResponse({
            data : spot,
        })
    );
});

const TouristSpot = require("./tourist.model");

exports.getTouristSpotBySlug = async (req, res) => {
  try {
    const spot = await TouristSpot.findOne({ slug: req.params.slug });

    if (!spot) {
      return res.status(404).json({ message: "Tourist spot not found" });
    }

    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    fetchAllTouristSpots,
    fetchTouristSpotById
}


