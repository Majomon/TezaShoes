const routerProducts = require("express").Router();
const handlerPostUser = require("../handlers/products/handlerPostUser");

routerProducts.post("/", handlerPostUser);

module.exports = routerProducts;
