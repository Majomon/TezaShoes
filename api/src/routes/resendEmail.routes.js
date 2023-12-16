const handlerPostResendEmail = require("../handlers/resendEmail/handlerPostResendEmail");

const routerResendEmail = require("express").Router();

routerResendEmail.post("/", handlerPostResendEmail);

module.exports = routerResendEmail;
