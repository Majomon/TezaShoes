const Categories = require("../../models/categories");

const postCategoriesController = async ({ name,image }) => {
  if (!name) {
    throw new Error(`Falta el nombre`);
  }
  if (!image) {
    throw new Error(`Falta la imagen`);
  }

  const newProd = await Categories.create({ name,image });

  return newProd;
};

module.exports = postCategoriesController;
