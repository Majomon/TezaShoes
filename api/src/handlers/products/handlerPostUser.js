const postProductController = require("../../controllers/products/controllerPostProduct");

const handlerPostUser = async (req, res) => {
  try {
    const product = await postProductController(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostUser;
