const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Categories", categoriesSchema);
