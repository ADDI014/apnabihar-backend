

const mongoose = require("mongoose");

const touristSpotSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },
        slug: {
         type: String,
         required: true,
         unique: true,
         index: true
        },
        location : {
            type : String ,
            required : true,
            index : true,
        },

        image : {
            type : String,
            required : true, 
        },

        images : {
            type :[String],
            required : true,
        },

        description : {
            type : String,
            required : true,
        },

        longDescription : {
            type : String,
            required : true
        },

        bestTimeToVisit : {
            type : String,
            required : true,
        },

        howToReach : {
            type : String,
            required : true
        },

        gmapLink : {
            type : String,
            required : true,
        },
    },
    {timestamps : true}
)

touristSpotSchema.index({name : 1, location : 1});

module.exports = mongoose.model("TouristSpot", touristSpotSchema);