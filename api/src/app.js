const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Rutas
const routerProducts = require("./routes/products.routes");
const routerUsers = require("./routes/users.routes");
const routerResendEmail= require("./routes/resendEmail.routes")

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/products", routerProducts);
app.use("/users", routerUsers);
app.use("/resendEmail", routerResendEmail);

module.exports = app;
