const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const { globalSearch } = require("./service");

const searchAll = asyncHandler(async (req, res) => {
  const {
    q,
    category,
    page = 1,
    limit = 10,
    deity,
    location,
    material,
    time_period,
  } = req.query;

  const filters = {};

  if (deity) filters.deity = new RegExp(deity, "i");
  if (location) filters.location = new RegExp(location, "i");
  if (material) filters.materials = new RegExp(material, "i");
  if (time_period) filters.time_period = new RegExp(time_period, "i");

  const data = await globalSearch({
    q,
    category,
    page: Number(page),
    limit: Number(limit),
    filters,
  });

  res.json(
    new ApiResponse({
      data,
      meta: {
        page: Number(page),
        limit: Number(limit),
        count: data.length,
      },
    })
  );
});

module.exports = { searchAll };
