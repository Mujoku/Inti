import morgan from "morgan";
import logger from "./winston.js";

// Morgan settings
const morganMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res) as string, // Add type assertion as string
      url: tokens.url(req, res) as string, // Add type assertion as string
      status: Number.parseFloat(tokens.status(req, res) as string), // Add type assertion as string
      content_length: tokens.res(req, res, "content-length") as string, // Add type assertion as string
      response_time: Number.parseFloat(
        tokens["response-time"](req, res) as string
      ), // Add type assertion as string
    });
  },
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => {
        const data = JSON.parse(message);
        logger.http(`incoming-request`, data);
      },
    },
  }
);

export default morganMiddleware;
