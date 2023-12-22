const Categories = require("../../models/categories");

const getCategoriesController = async () => {
  const products = await Categories.find();
  return products;
};

module.exports = getCategoriesController;
