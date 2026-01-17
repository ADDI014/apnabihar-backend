const mongoose = require("mongoose");

const cuisineSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        index : true,
    },
    slug : {
        type : String,
        required : true,
        unique : true,
        index : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    longDescription : {
        type : String,
        required : true,  
    },
    ingredients : {
        type : [String],
        required : true,
    },
} , 
 {timestamps : true}
)

cuisineSchema.index({
  name: "text",
  description: "text",
  longDescription: "text",
  ingredients: "text",
});



module.exports = mongoose.model("Cuisine", cuisineSchema);


