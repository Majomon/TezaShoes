const Products = require("../../models/products");

const controllerGetAllProducts = async () => {
  const products = await Products.find();
  return products;
};

module.exports = controllerGetAllProducts;
