const controllerGetCategories = require("../../controllers/categories/controllerGetCategories");

const handlerGetCategories = async (req, res) => {
  try {
    const category = await controllerGetCategories(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetCategories;
