const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
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
  offer: {
    offerActive: {
      type: Boolean,
      default: false,
    },
    offerPrice: {
      type: Number,
      default: 0,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Products", productsSchema);
