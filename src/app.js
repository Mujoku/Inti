import express from "express";
import helmet from "helmet";
import axios from "axios";
import logger from "./loggers/winston.js";
import morganMiddleware from "./loggers/morgan.js";

const app = express();

// Use morgan metadata logging
app.use(morganMiddleware);
// Use Helmet
app.use(helmet());
// Disable default X-Powered-By response header banner
app.disable("x-powered-by");

app.get("/", (req, res) => {
  const printer = () => "ES6 in action";
  res.send(printer());
  logger.info("Info logs");
});

app.get("/crypto", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api2.binance.com/api/v3/ticker/24hr"
    );

    const tickerPrice = response.data;

    res.json(tickerPrice);
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal server error");
  }
});

export default app;
