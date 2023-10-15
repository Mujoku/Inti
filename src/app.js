// const express = require("express");
// const helmet = require("helmet");
import express from "express";
import helmet from "helmet";

const app = express();

// Use Helmet!
app.use(helmet());
// Disable default X-Powered-By response header banner
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("We got this!!!");
});

export default app;
