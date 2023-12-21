const Categories = require("../../models/categories");

const postCategoriesController = async ({ name }) => {
  if (!name) {
    throw new Error(`Falta el nombre`);
  }

  const newProd = await Categories.create({ name });

  return newProd;
};

module.exports = postCategoriesController;
