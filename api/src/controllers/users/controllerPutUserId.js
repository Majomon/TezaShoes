const User = require("../../models/users");

const controllerPutUserId = async ({
  id,
  name,
  phone,
  email,
  password,
  isAdmin,
}) => {
  const updateUser = await User.findByIdAndUpdate(id, {
    name,
    phone,
    email,
    password,
    isAdmin,
  });

  return `Usuario de ID: ${id} modificado con exito`;
};

module.exports = controllerPutUserId;
