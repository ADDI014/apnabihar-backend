
const Clothes = require("./model");

const ApiError = require("../../utils/ApiError");

const getAllClothes = async ({
    page = 1,
    limit = 10,
    search = "",
    material,
}) => {
    const query = {};

    if(search){
        query.name = {$regex : search, $options : "i"};
    }

    if(material){
        query.materials = {$regex : material, $options : "i"};
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        Clothes.find(query).skip(skip).limit(limit),
        Clothes.countDocuments(query),
    ]);


    return {
        items,
        meta : {
            page : Number(page),
            limit :Number(limit),
            total,
        },
    };
};


const getClothesById = async (id) => {
    const cloth = await Clothes.findById(id);
    if(!cloth) throw new ApiError(404, "Clothing item not found");
    return cloth;   
}

module.exports = {
    getAllClothes,
    getClothesById,
};

