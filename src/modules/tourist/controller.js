
const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const {getAllTouristSpots, getTouristSpotById} = require("./service");

const fetchTouristSpots = asyncHandler(async (req,res) => {
    const result = await getAllTouristSpots(req.query);

    res.json(
        new ApiResponse({
            data : result.items,
            meta : result.meta,
        })
    )
})


const fetchTouristSpotById = asyncHandler(async (req,res) => {
    const spot = await getAllTouristSpots(req.params.id);

    res.json(
        new ApiResponse({
            data : spot,
        })
    );
});

module.exports = {
    fetchTouristSpots,
    fetchTouristSpotById
}


