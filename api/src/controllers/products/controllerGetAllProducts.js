const Product = require("../../models/products");

const controllerGetAllProducts = async () => {
  const products = await Product.find();
  return products;
};

module.exports = controllerGetAllProducts;
