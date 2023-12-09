const controllerGetProductID = require("../../controllers/products/controllerGetProductID");

const handlerGetProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const productId = await controllerGetProductID(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetProductId;
