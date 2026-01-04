
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

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

module.exports = {
  fetchHistory,
  fetchHistoryById,
};
