const handlerGetAllUsers = require("../handlers/users/handlerGetAllUsers");
const handlerGetUserId = require("../handlers/users/handlerGetUserId");
const handlerPostUser = require("../handlers/users/handlerPostUser");

const routerUsers = require("express").Router();

routerUsers.post("/", handlerPostUser);
routerUsers.get("/", handlerGetAllUsers);
routerUsers.get("/:id", handlerGetUserId);


module.exports = routerUsers;
