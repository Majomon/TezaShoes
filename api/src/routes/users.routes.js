const handlerGetAllUsers = require("../handlers/users/handlerGetAllUsers");
const handlerPostUser = require("../handlers/users/handlerPostUser");

const routerUsers = require("express").Router();

routerUsers.post("/", handlerPostUser);
routerUsers.get("/", handlerGetAllUsers);

module.exports = routerUsers;
