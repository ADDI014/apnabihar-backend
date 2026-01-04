
const mongoose = require("mongoose");

const festiveSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },
        image : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },
        timeOfYear : {
            type : String,
            required : true,
            index : true,
        },
        significance : {
            type : String,
            required : true,
        },
    },
    {timestamps : true}
)


festiveSchema.index({name : 2, timeOfYear : 1});

module.exports = mongoose.model("Festival", festiveSchema);

