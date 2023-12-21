const controllerPostCategories = require("../../controllers/categories/controllerPostCategories");

const handlerPostCategories = async (req, res) => {
  try {
    const category = await controllerPostCategories(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostCategories;
