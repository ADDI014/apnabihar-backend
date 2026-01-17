
const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
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
        image : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true,
        },

        materials : {
            type : String,
            required : true,
        },
        details : {
            type : String,
            required : true
        },
    },
    {timestamps : true}
);

clothesSchema.index({
  name: "text",
  description: "text",
  materials: "text",
  details: "text",
});


module.exports = mongoose.model("Clothes", clothesSchema);
