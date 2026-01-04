
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

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


module.exports = {
    fetchTemples,
    fetchTempleById,
}


