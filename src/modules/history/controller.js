const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const History = require("./model");

const { getAllHistory, getHistoryById } = require("./service");

const fetchHistory = asyncHandler(async (req, res) => {
  const result = await getAllHistory(req.query);

  res.json(
    new ApiResponse({
      data: result.items,
      meta: result.meta,
    })
  );
});

const fetchHistoryById = asyncHandler(async (req, res) => {
  const history = await getHistoryById(req.params.id);

  res.json(
    new ApiResponse({
      data: history,
    })
  );
});

const getHistoryBySlug = asyncHandler(async (req, res) => {
  const history = await History.findOne({ slug: req.params.slug });

  if (!history) {
    res.status(404);
    throw new Error("History not found");
  }

  res.json(
    new ApiResponse({
      data: history,
    })
  );
});

module.exports = {
  fetchHistory,
  fetchHistoryById,
  getHistoryBySlug,
};
