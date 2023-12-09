const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  options: [
    {
      color: {
        type: String,
        required: true,
      },
      sizes: [
        {
          size: {
            type: Number,
            required: true,
          },
          stock: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
  price: {
    type: Number,
    required: true,
  },
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
  //Liquidación
  settlement: {
    type: Boolean,
    required: false,
  },
  promotion: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Products", productsSchema);
