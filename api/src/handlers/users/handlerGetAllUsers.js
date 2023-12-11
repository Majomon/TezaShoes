const controllerGetAllUsers = require("../../controllers/users/controllerGetAllUsers");

const handlerGetAllUsers = async (req, res) => {
  try {
    const allUser = await controllerGetAllUsers();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetAllUsers;
