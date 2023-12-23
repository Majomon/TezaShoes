const handlerPostLogin = require("../handlers/login/handlerPostLogin");

const routerLogin = require("express").Router();

routerLogin.post("/", handlerPostLogin);

module.exports = routerLogin;
