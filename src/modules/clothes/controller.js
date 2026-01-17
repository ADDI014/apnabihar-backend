const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const Clothes = require("./model");

const { getAllClothes, getClothesById } = require("./service");

const fetchClothes = asyncHandler(async (req, res) => {
  const result = await getAllClothes(req.query);

  res.json(
    new ApiResponse({
      data: result.items,
      meta: result.meta,
    })
  );
});

const fetchClothesById = asyncHandler(async (req, res) => {
  const cloth = await getClothesById(req.params.id);

  res.json(
    new ApiResponse({
      data: cloth,
    })
  );
});

const fetchClothesBySlug = asyncHandler(async (req, res) => {
  const cloth = await Clothes.findOne({ slug: req.params.slug });

  if (!cloth) {
    res.status(404);
    throw new Error("Clothes item not found");
  }

  res.json(
    new ApiResponse({
      data: cloth,
    })
  );
});

module.exports = {
  fetchClothes,
  fetchClothesById,
  fetchClothesBySlug,
};
