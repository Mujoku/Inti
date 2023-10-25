import express, { Express, Request, Response } from "express";
// import helmet from "helmet";
// import helmetCsp from "helmet-csp";
import morganMiddleware from "./loggers/morgan.js";
import routes from "./routes/routes.js";
import shopify from "./services/shopify.js";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  shopify.product
    .create({
      title: "Burton Custom Freestyle 154",
      body_html: "<strong>Good snowboard!</strong>",
    })
    .then((products) => console.log(products))
    .catch((err) => console.error(err));
  res.send("Hello World!");
});

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
