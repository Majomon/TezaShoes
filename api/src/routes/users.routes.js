const handlerGetAllUsers = require("../handlers/users/handlerGetAllUsers");
const handlerGetUserId = require("../handlers/users/handlerGetUserId");
const handlerPostUser = require("../handlers/users/handlerPostUser");
const handlerPutUserId = require("../handlers/users/handlerPutUserId");

const routerUsers = require("express").Router();

routerUsers.post("/", handlerPostUser);
routerUsers.get("/", handlerGetAllUsers);
routerUsers.get("/:id", handlerGetUserId);
routerUsers.put("/:id", handlerPutUserId);



module.exports = routerUsers;
