
const asyncHandler = require("../../middlewares/asyncHandler");


const ApiResponse = require("../../utils/ApiResponse");
const Temple = require("./model");

const {getAllTemples, getTempleById} = require("./service");

const fetchTemples = asyncHandler(async (req,res) => {
    const result = await getAllTemples(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    );
});


const fetchTempleById = asyncHandler(async (req,res) => {
    const temple = await getTempleById(req.params.id);

    res.json(
        new ApiResponse({
            data : temple
        })
    );
});

exports.getTempleBySlug = async (req,res) => {
    try {
        const temple = await Temple.findOne({slug : req.params.slug});

        if(!temple) {
            return res.status(404).json({message : "Temple not found"});
        }

        res.json(temple);
    }
    catch(error) {
        res.json(500).json({message : error.message});
    }
}


module.exports = {
    fetchTemples,
    fetchTempleById,
}


