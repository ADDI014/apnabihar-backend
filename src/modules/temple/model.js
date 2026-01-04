const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    slug : {
      type : String,
      required : true,
      unique : true,
      index : true
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deity: {
      type: String,
      required: true,
      index: true,
    },
    significance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

templeSchema.index({ name: 1, deity: 1 });

module.exports = mongoose.model("Temple", templeSchema);
