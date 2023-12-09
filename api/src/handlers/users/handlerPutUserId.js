const controllerPutUserId = require("../../controllers/users/controllerPutUserId");

const handlerPutUserId = async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, password, isAdmin } = req.body;
  try {
    const updateUser = await controllerPutUserId({
      id,
      name,
      phone,
      email,
      password,
      isAdmin,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUserId;
