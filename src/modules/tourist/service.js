
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
        query.$text = {$regex : search};
    }

    if(location) {
        query.location = new RegExp(location, "i");
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        TouristSpot.find(query).skip(skip).limit(limit),
        TouristSpot.countDocuments(query),
    ]);

    return {
        items,
        meta : {
            page : +page,
            limit : +limit,
            total,
        },
    };
};



const getTouristSpotById = async (id) => {
    const spot = await TouristSpot.findById(id);
    if(!spot) throw new ApiError(404, "Tourist spot not found");
    return spot;
}

const getTouristBySlug = async (slug) => {
    const item = await TouristSpot.findOne({slug});
    if(!item) throw new ApiError(404, "Tourist spot not found");
    return item;
}


module.exports = {
    getAllTouristSpots,
    getTouristSpotById,
    getTouristBySlug,
};

