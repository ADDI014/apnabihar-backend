
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

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


module.exports = {
  fetchClothes,
  fetchClothesById,
};