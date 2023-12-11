const routerProducts = require("express").Router();

const handlerPostUser = require("../handlers/products/handlerPostUser");
const handlerGetAllProducts = require("../handlers/products/handlerGetAllProducts");
const handlerGetProductId = require("../handlers/products/handlerGetProductID");
const handlerPutProductId = require("../handlers/products/handlerPutProductId");

routerProducts.post("/", handlerPostUser);
routerProducts.get("/", handlerGetAllProducts);
routerProducts.get("/:id", handlerGetProductId);
routerProducts.put("/:id", handlerPutProductId);


module.exports = routerProducts;
