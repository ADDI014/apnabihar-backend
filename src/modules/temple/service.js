const Temple = require("./model");
const ApiError = require("../../utils/ApiError");

const getAllTemples = async ({
  page = 1,
  limit = 10,
  search = "",
  deity,
}) => {
  const query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (deity) {
    query.deity = { $regex: deity, $options: "i" };
  }

  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Temple.find(query).skip(skip).limit(limit),
    Temple.countDocuments(query),
  ]);

  return {
    items,
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
  };
};

const getTempleById = async (id) => {
  const temple = await Temple.findById(id);
  if (!temple) throw new ApiError(404, "Temple not found");
  return temple;
};

module.exports = {
  getAllTemples,
  getTempleById,
};
