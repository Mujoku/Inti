import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import axios from "axios";
import logger from "./loggers/winston.js";
import morganMiddleware from "./loggers/morgan.js";

const app: Express = express();

/**
 * TODO: 1. Prepare routes for webhooks
 * TODO: 2. Prepare routes for the authentication
 * TODO: 3. Prepare transformation layer for the data integration
 * TODO: 4. Prepare controllers for request handling
 * TODO: 5. Prepare services for the bussiness logic
 */

/**
 * Use morgan metadata logging
 * Configure safe headers with Helmet
 * Disable default X-Powered-By response header banner
 * */
app.use(morganMiddleware);
app.use(helmet());
app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) => {
  const printer = () => "A project with ES6, TS ready and dev tools installed!";
  res.send(printer());
  logger.info("Info logs");
});

app.get("/crypto", async (req: Request, res: Response) => {
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
