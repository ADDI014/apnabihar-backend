

const mongoose = require("mongoose");

const artSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },
        slug : {
            type : String,
            required: true,
            unique: true,
            index: true
        },
        image : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        origin : {
            type : String,
            required : true
        },
        details : {
            type : String,
            required : true
        },
    },
    {
            timestamps : true
    }
)

module.exports = mongoose.model("Art", artSchema);