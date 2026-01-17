const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const Cuisine = require("./model");

const { getAllCuisines, getCuisineById } = require("./service");

const fetchCuisines = asyncHandler(async (req, res) => {
  const result = await getAllCuisines(req.query);
  res.json(
    new ApiResponse({
      data: result.items,
      meta: result.meta,
    })
  );
});

const fetchCuisineById = asyncHandler(async (req, res) => {
  const cuisine = await getCuisineById(req.params.id);
  res.json(new ApiResponse({ data: cuisine }));
});

const getCuisineBySlug = asyncHandler(async (req, res) => {
  const cuisine = await Cuisine.findOne({ slug: req.params.slug });

  if (!cuisine) {
    res.status(404);
    throw new Error("Cuisine not found");
  }

  res.json(new ApiResponse({ data: cuisine }));
});

module.exports = {
  fetchCuisines,
  fetchCuisineById,
  getCuisineBySlug,
};
