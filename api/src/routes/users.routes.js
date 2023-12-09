const routerUsers = require("express").Router();

routerUsers.post("/", (req, res) => {
  res.status(200).json("Hola");
});

module.exports = routerUsers;
