const User = require("../../models/users");

const controllerPostUser = async ({ email, password }) => {
  if (!email || !password) {
    const missingField = !email ? "email" : "password";
    throw new Error(`Falta ${missingField}`);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("El usuario no existe");
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new Error("Contraseña incorrecta");
  }

  return { success: true, user: user };
};

module.exports = controllerPostUser;
