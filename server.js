// const app = require("./src/app");
import app from "./src/app.js";
// require("dotenv").config();
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
