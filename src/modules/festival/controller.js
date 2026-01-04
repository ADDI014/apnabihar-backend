
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

const Festival = require("./model");

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

exports.getFestivalBySlug = async (req, res) => {
  try {
    const festival = await Festival.findOne({ slug: req.params.slug });

    if (!festival) {
      return res.status(404).json({ message: "Festival not found" });
    }

    res.json(festival);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    fetchFestivals,
    fetchFestivalById,
}


