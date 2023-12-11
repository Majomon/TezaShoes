const controllerGetAllProducts = require("../../controllers/products/controllerGetAllProducts");

const handlerGetAllProducts = async (req, res) => {
  try {
    const product = await controllerGetAllProducts();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = handlerGetAllProducts;
