const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
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
            required : true
        },
        time_period : {
            type : String,
            required : true,
            index : true
        },
        detailed_account : {
            type : String,
            required : true
        },
    },
    {timestamps : true}
);

historySchema.index({
  name: "text",
  description: "text",
  time_period: "text",
  detailed_account: "text",
});


module.exports = mongoose.model("History", historySchema);

