const Festival = require("./model");

const ApiError = require("../../utils/ApiError");

const getAllFestivals = async ({
    page = 1,
    limit = 10,
    search = "",
    timeOfYear,
}) => {
    const query = {};

    if(search){
        query.name = {$regex : search, $options : "i"};
    }

    if(timeOfYear){
        query.timeOfYear = {$regex : timeOfYear, $options : "i"};
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        Festival.find(query).skip(skip).limit(limit),
        Festival.countDocuments(query),
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


const getFestivalById = async (id)=> {
    const festival = await Festival.findById(id);
    if(!festival) {
        throw new ApiError(404, "Festival not found");
        return festival;
    };
}

module.exports = {
    getAllFestivals,
    getFestivalById,
}