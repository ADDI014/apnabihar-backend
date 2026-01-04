

const History = require("./model");
const ApiError = require("../../utils/ApiError");

const getAllHistory = async ({
    page = 1,
    limit = 10,
    search = "",
    timePeriod,
}) => {
    const query = {};

    if(search) {
        query.name = {$regex : search, $options : "i"};
    }

    if(timePeriod) {
        query.timePeriod = {$regex : timePeriod, $options : "i"};
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        History.find(query).skip(skip).limit(limit),
        History.countDocuments(query),
    ]);

    return {
        items,
        meta : {
            page : Number(page),
            limit : Number(limit),
            total,
        },
    };
};

const getHistoryById = async (id) => {
    const history = await History.findById(id);

    if(!history) throw new ApiError(404, "History record not found");
    return history;
};



module.exports = {
  getAllHistory,
  getHistoryById,
};



