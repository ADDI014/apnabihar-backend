const mongoose = require('mongoose');

const touristSpotSchema = new mongoose.Schema({
    id: {type : Number, required : true, unique : true},
    name : {type : String, required : true},
    location : { type : String},
    image : { type : String},
    Images : [String],
    description : { type : String},
    long_description: { type: String },
    best_time_to_visit: { type: String },
    how_to_reach: { type: String },
    gmap_link: { type: String },
})

const TouristSpot = mongoose.model('TouristSpot', touristSpotSchema);


module.exports = TouristSpot;