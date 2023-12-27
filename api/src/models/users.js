const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  document: {
    type: Number,
  },
  birthdate: {
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
  },
  address: {
    //Calle
    street: {
      type: String,
    },
    //Altura
    number: {
      type: Number,
    },
    //Piso
    floor: {
      type: String,
    },
    //Departamento
    department: {
      type: String,
    },
    //Ciudad
    city: {
      type: String,
    },
    //Código postal
    postalCode: {
      type: String,
    },
    //Provincia
    province: {
      type: String,
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("Users", usersSchema);
