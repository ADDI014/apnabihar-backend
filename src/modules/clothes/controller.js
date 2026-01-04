
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");
const Clothes = require("./model");

const {getAllClothes, getClothesById} = require("./service");


const fetchClothes = asyncHandler(async (req,res) => {
    const result = await getAllClothes(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
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


exports.getClothesBySlug = async (req, res) => {
  try {
    const cloth = await Clothes.findOne({ slug: req.params.slug });

    if (!cloth) {
      return res.status(404).json({ message: "Tourist spot not found" });
    }

    res.json(cloth);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchClothes,
  fetchClothesById,
};