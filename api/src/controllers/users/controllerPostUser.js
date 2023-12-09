const User = require("../../models/users");

const controllerPostUser = async ({
  name,
  phone,
  email,
  password,
  isAdmin,
}) => {
  if (!name || !phone || !email || !password) {
    const missingField = !name
      ? "name"
      : !phone
      ? "phone"
      : !email
      ? "email"
      : "password";
    throw new Error(`Falta ${missingField}`);
  }

  const newUser = await User.create({
    name,
    phone,
    email,
    password,
    isAdmin,
  });

  return newUser;
};

module.exports = controllerPostUser;
