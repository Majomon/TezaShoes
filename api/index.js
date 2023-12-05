require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 9000;
const app = require("./src/app");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a mi base de datos en MongoDB"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));
