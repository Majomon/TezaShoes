const controllerGetUserId = require("../../controllers/users/controllerGetUserId");

const handlerGetUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = await controllerGetUserId(id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetUserId;
