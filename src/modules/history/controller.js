
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");
const History = require("./model");

const {getAllHistory, getHistoryById} = require("./service");

const fetchHistory = asyncHandler(async (req,res) => {
    const result = await getAllHistory(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    );
});

const fetchHistoryById = asyncHandler(async (req,res) => {
    const history = await getHistoryById(req.params.id);

    res.json(
        new ApiResponse({
            data : history,
        })
    );
});

exports.getHistoryBySlug = async (req, res) => {
  try {
    const history = await History.findOne({ slug: req.params.slug });

    if (!history) {
      return res.status(404).json({ message: "Festival not found" });
    }

    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchHistory,
  fetchHistoryById,
};
