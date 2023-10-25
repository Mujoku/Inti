import Shopify from "shopify-api-node";
import config from "../config/config.js";

const shopify = new Shopify({
  shopName: config.shopify.url,
  accessToken: config.shopify.apiSecret,
  apiVersion: config.shopify.apiVersion,
});

export default shopify;
