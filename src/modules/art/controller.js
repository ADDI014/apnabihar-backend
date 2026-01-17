const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const Art = require("./model");

const { getAllArts, getArtById } = require("./service");

const fetchArts = asyncHandler(async (req, res) => {
  const result = await getAllArts(req.query);
  res.json(new ApiResponse({ data: result.items, meta: result.meta }));
});

const fetchArtById = asyncHandler(async (req, res) => {
  const art = await getArtById(req.params.id);
  res.json(new ApiResponse({ data: art }));
});

const getArtBySlug = asyncHandler(async (req, res) => {
  const art = await Art.findOne({ slug: req.params.slug });

  if (!art) {
    res.status(404);
    throw new Error("Art not found");
  }

  res.json(new ApiResponse({ data: art }));
});

module.exports = {
  fetchArts,
  fetchArtById,
  getArtBySlug,
};
