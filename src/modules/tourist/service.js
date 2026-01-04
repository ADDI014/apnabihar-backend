
const TouristSpot = require("./model");
const ApiError = require("../../utils/ApiError");

const getAllTouristSpots = async ({
    page = 1,
    limit = 10,
    search = "",
    location,
}) => {

    const query = {};

    if(search) {
        query.name = {$regex : search, $options : "i"};
    }

    if(location) {
        query.location = {$regex : location, $options : "i"};
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        TouristSpot.find(query).skip(skip).limit(limit),
        TouristSpot.countDocuments(query),
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



const getTouristSpotById = async (id) => {
    const spot = await TouristSpot.findById(id);
    if(!spot) throw new ApiError(404, "Tourist spot not found");
    return spot;
}


module.exports = {
    getAllTouristSpots,
    getTouristSpotById,
};

