const routerCategories = require("express").Router()
const handlerPostCategories = require("../handlers/categories/handlerPostCategories");
const handlerGetCategories = require("../handlers/categories/handlerGetCategories")
const handlerPutCategories= require("../handlers/categories/handlerPutCategories")

routerCategories.post("/", handlerPostCategories);
routerCategories.get("/", handlerGetCategories);
routerCategories.put("/:id", handlerPutCategories);




module.exports = routerCategories;