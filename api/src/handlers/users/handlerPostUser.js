const controllerPostUser = require("../../controllers/users/controllerPostUser");

const handlerPostUser = async (req, res) => {
  try {
    const user = await controllerPostUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostUser;
