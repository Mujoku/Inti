import express, { Express, Request, Response } from "express";
// import helmet from "helmet";
// import helmetCsp from "helmet-csp";
import morganLogger from "./loggers/morgan.js";
import routes from "./routes/routes.js";
import ipWhitelistMiddleware from "./middleware/ipWhitelistMiddleware.js";

const app: Express = express();

// Morgan Logger middleware
app.use(morganLogger);
// app.use(helmet());
app.disable("x-powered-by");
// IP Whitelist middleware
app.use(ipWhitelistMiddleware);
// Composed pipeline for the routes
app.use("/api", routes);

export default app;
