
const mongoose = require("mongoose");

const festiveSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },
         name: {
           type: String,
           required: true,
           trim: true
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


festiveSchema.index({
  name: "text",
  description: "text",
  significance: "text",
  timeOfYear: "text",
});


module.exports = mongoose.model("Festival", festiveSchema);

