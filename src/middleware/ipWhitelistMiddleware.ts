import { Request, Response, NextFunction } from "express";
import config from "../config/config.js";

function verifyIP(req: Request, res: Response, next: NextFunction) {
  // Define the allowed IP addresses or IP range you want to allow.
  //   const allowedIPs: string[] = ["127.0.0.1", "192.168.0.1"]; // Add your allowed IPs here
  // Split the string into an array of allowed IP addresses
  const allowedIPs: string[] = config.whitelist.ipList
    .split(",")
    .map((ip: string) => ip.trim());

  // Get the client's IP address from the request object
  const clientIP: string =
    req.headers["x-forwarded-for"]?.toString() ||
    req.socket.remoteAddress?.toString() ||
    "";

  // Check if the client's IP is in the allowed IPs list
  if (allowedIPs.includes(clientIP)) {
    // If the IP is allowed, proceed to the next middleware or route
    console.log(`IP ${clientIP} is allowed`);
    next();
  } else {
    // If the IP is not allowed, send a response with a 403 Forbidden status
    res.status(403).send("Access Denied: Your IP is not allowed.");
    console.log(`IP ${clientIP} is not allowed`);
  }
}

export default verifyIP;
