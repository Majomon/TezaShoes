const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
/* const routerUser = require("./routes/users.routes");
const routerProperty = require("./routes/property.routes");
const routerResend = require("./routes/resend.routes");
const routerSearch = require("./routes/search.routes") */

//Rutas

const app = express();
//
//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//asdasdasd
// Routes
/* app.use("/users", routerUser);
app.use("/properties", routerProperty);
app.use("/resend", routerResend);
app.use("/search", routerSearch)
 */
module.exports = app;
