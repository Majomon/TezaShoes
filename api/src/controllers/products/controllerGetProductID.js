const Product = require("../../models/products");

const controllerGetProductID = async (id) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = controllerGetProductID;
