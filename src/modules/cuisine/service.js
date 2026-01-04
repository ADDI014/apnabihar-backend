
const Cuisine = require("./model");
const ApiError = require("../../utils/ApiError");

const getAllCuisines = async ({page = 1, limit = 10, search = ""}) => {
    const query = search ?
        {name : {$regex : search, $options : "i"}}
        : {};


        const skip = (page - 1) * limit;([
            Cuisine.find(query).skip(skip).limit(limit),
            Cuisine.countDocuments(query)
        ]);

        return {
            items,
            meta : {page : Number(page), limit : Number(limit), total},
        };
};



const getCuisineById = async (id) => {
    const cuisine = await Cuisine.findById(id);
    if(!cuisine) throw new ApiError(404, "Cuisine not found");
    return cuisine;
};

module.exports = {
    getAllCuisines,
    getCuisineById
};






