const controllerPostLogin = require("../../controllers/login/controllerPostLogin");

const handlerPostLogin = async (req, res) => {
  try {
    const category = await controllerPostLogin(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostLogin;
