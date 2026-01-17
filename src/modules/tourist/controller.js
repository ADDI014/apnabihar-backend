const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const {
  getAllTouristSpots,
  getTouristSpotById,
  getTouristBySlug,
} = require("./service");

const fetchAllTouristSpots = asyncHandler(async (req, res) => {
  const result = await getAllTouristSpots(req.query);

  res.json(
    new ApiResponse({
      data: result.items,
      meta: result.meta,
    })
  );
});

const fetchTouristSpotById = asyncHandler(async (req, res) => {
  const spot = await getTouristSpotById(req.params.id);

  res.json(
    new ApiResponse({
      data: spot,
    })
  );
});

const fetchTouristSpotBySlug = asyncHandler(async (req, res) => {
  const spot = await getTouristBySlug(req.params.slug);

  if (!spot) {
    res.status(404);
    throw new Error("Tourist spot not found");
  }

  res.json(
    new ApiResponse({
      data: spot,
    })
  );
});

module.exports = {
  fetchAllTouristSpots,
  fetchTouristSpotById,
  fetchTouristSpotBySlug,
};
