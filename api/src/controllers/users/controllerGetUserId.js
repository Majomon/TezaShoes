const User = require("../../models/users");

const controllerGetUserId = async (id) => {
  const user = await User.findById(id);
  return user ;
};

module.exports = controllerGetUserId;
