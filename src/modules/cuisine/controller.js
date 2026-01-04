

const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const Cuisine = require("./model");



const {getAllCuisines, getCuisineById} = require("./service");

const fetchCuisines = asyncHandler(async (req, res) => {
    const result = await getAllCuisines(req.query);
    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    );
});

const fetchCuisineById = asyncHandler(async (req, res) => {
  const cuisine = await getCuisineById(req.params.id);
  res.json(new ApiResponse({ data: cuisine }));
});

exports.getCuisineBySlug = async (req, res) => {
  try {
    const cuisine = await Cuisine.findOne({ slug: req.params.slug });

    if (!cuisine) {
      return res.status(404).json({ message: "Tourist spot not found" });
    }

    res.json(cuisine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchCuisines,
  fetchCuisineById,
};

