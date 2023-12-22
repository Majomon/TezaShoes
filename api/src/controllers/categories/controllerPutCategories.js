const Categories = require("../../models/categories");

const putCategoriesController = async ({ id, name, image }) => {
  if (!name || !image) {
    return "Falta alguna propiedad";
  }
  console.log(name);
  const updateCategories = await Categories.findByIdAndUpdate(id, {
    name,
    image,
  });

  return updateCategories;
};

module.exports = putCategoriesController;
