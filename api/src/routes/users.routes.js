const handlerPostUser = require("../handlers/users/handlerPostUser");

const routerUsers = require("express").Router();

routerUsers.post("/", handlerPostUser);

module.exports = routerUsers;
