import express, { Request, Response, Router } from "express";
import axios from "axios";
import logger from "../loggers/winston.js";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const printer = () => "A project with ES6, TS ready and dev tools installed!";
  res.send(printer());
  logger.info("Info logs");
});

router.get("/try", (req: Request, res: Response) => {
  res.send("Try routes");
});

router.get("/crypto", async (req: Request, res: Response) => {
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

export default router;
