
const Art = require("./model");
const ApiError = require("../../utils/ApiError");

const getAllArts = async ({page = 1 , limit = 10, search = ""}) => {
    const query = search
    ? { name: { $regex: search, $options: "i" } }
    : {};


    const skip = (page - 1) * limit;
    
    const [items, total] = await Promise.all([
        Art.find(query).skip(skip).limit(limit),
        Art.countDocuments(query),
    ]);


    return {
        items,
        meta  : {
            page , limit , total
        },
    }
}



const getArtById = async (id) => {
    const art = await Art.findById(id);
    if(!art) throw new ApiError(404, "Art not Found");
    return art;
}

module.exports = {getAllArts, getArtById};