
const asyncHandler = require("../../middlewares/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");
const Art = require("./model");

const {getAllArts, getArtById} = require("./service");


const fetchArts = asyncHandler(async (req, res) => {
    const result = await getAllArts(req.query);
    res.json(new ApiResponse({data : result.items, meta : result.meta}));
});

const fetchArtById = asyncHandler(async (req,res) => {
    const art = await getArtById(req.params.id);
    res.json(new ApiResponse({data : art}));
});

exports.getArtBySlug = async (req, res) => {
  try {
    const art = await Art.findOne({ slug: req.params.slug });

    if (!art) {
      return res.status(404).json({ message: "Tourist spot not found" });
    }

    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {fetchArts, fetchArtById};


