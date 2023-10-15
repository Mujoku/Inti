const express = require("express");
const helmet = require("helmet");

const app = express();

// Use Helmet!
app.use(helmet());
// Disable default X-Powered-By response header banner
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("We got this!!!");
});

module.exports = app;
