import express, { Request, Response, Router } from "express";
import axios from "axios";
import logger from "../loggers/winston.js";
import getProducts from "../controllers/products.js";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const printer = () => "A project with ES6, TS ready and dev tools installed!";
  res.send(printer());
  logger.info("Info logs");
});

router.get("/products", getProducts);

export default router;
