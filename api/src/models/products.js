const mongoose = require("mongoose");

const propertiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
    },
  ],
  sizes: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  //Liquidación
  settlement: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Products", propertiesSchema);
