
const controllerPutCategories= require("../../controllers/categories/controllerPutCategories")

const handlerPutCategories = async (req, res) => {
  const {id} = req.params;
  const {name,image} = req.body;
  try {
    const categoryUpdate = await controllerPutCategories({id,name,image});
    res.status(200).json(categoryUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutCategories;
