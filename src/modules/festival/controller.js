
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

const {getAllFestivals,getFestivalById} = require("./service");


const fetchFestivals = asyncHandler(async (req,res) => {
    const result = await getAllFestivals(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    );
});



const fetchFestivalById = asyncHandler(async (req,res) => {
    const festival = await getFestivalById(req.params.id);

    res.json(
        new ApiResponse({
            data : festival,
        })
    )
});


module.exports = {
    fetchFestivals,
    fetchFestivalById,
}


