const Users = require("../../models/users");

const controllerGetAllUsers = async () => {
  const products = await Users.find();
  return products;
};

module.exports = controllerGetAllUsers;
