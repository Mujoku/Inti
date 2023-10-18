import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import helmetCsp from "helmet-csp";
import morganMiddleware from "./loggers/morgan.js";
import routes from "./routes/routes.js";

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
// app.use(helmet());
app.disable("x-powered-by");

// Composed pipeline for the routes
app.use("/api", routes);
export default app;
