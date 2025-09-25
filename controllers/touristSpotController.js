
const TouristSpot = require("../models/touristModel");

const getTouristSpots  = async (req,res) => {
    try {
        const spots = await TouristSpot.find({});
        res.status(200).json(spots);
    }
    catch(err){
        res.status(500).json({message : "Server Error"});
    }
}


module.exports = {getTouristSpots };