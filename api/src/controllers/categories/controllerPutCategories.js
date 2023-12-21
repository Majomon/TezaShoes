const Categories = require("../../models/categories");

const putCategoriesController = async ({ id, name }) => {
  if (!name) {
    return "Falta alguna propiedad";
  }
  console.log(name);
  const updateCategories = await Categories.findByIdAndUpdate(id, {
    name,
  });

  return updateCategories;
};

module.exports = putCategoriesController;
