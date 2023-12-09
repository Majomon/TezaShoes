const routerProducts = require("express").Router();
const handlerGetAllProducts = require("../handlers/products/handlerGetProducts");
const handlerPostUser = require("../handlers/products/handlerPostUser");

routerProducts.post("/", handlerPostUser);
routerProducts.get("/", handlerGetAllProducts);
/* routerProducts.get("/:id", handlerGetAllProducts); */




module.exports = routerProducts;
