import "dotenv/config";

const SHOPIFY_URL = process.env.SHOPIFY_URL || "https://example.myshopify.com";
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY || "1234567890";
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET || "1234567890";
const SHOPIFY_API_VERSION = process.env.SHOPIFY_API_VERSION || "2021-04";

const BASELINKER_CONNECTOR_URL =
  process.env.BASELINKER_CONNECTOR_URL || "https://example.myshopify.com";
const BASELINKER_API_KEY = process.env.BASELINKER_API_KEY || "1234567890";
const BASELINKER_API_SECRET = process.env.BASELINKER_API_SECRET || "1234567890";
