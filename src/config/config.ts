import "dotenv/config";

interface ShopifyConfig {
  url: string;
  apiKey: string;
  apiSecret: string;
  apiVersion: string;
}

interface BaselinkerConfig {
  connectorUrl: string;
  blToken: string;
}

interface AppConfig {
  shopify: ShopifyConfig;
  baselinker: BaselinkerConfig;
}

function checkEnvVariable(key: string, defaultValue?: string): string {
  const value = process.env[key] || (defaultValue as string);
  if (!value) {
    console.error(
      `Environment variable ${key} is not set. Using the default value. You can set it in .env file or pass the default value in the config file located at src/config/config.ts`
    );
  }
  return value;
}

const config: AppConfig = {
  shopify: {
    url: checkEnvVariable(
      "SHOPIFY_URL",
      "https://your-shopify-store.myshopify.com"
    ),
    apiKey: checkEnvVariable("SHOPIFY_API_KEY", "your-shopify-api-key"),
    apiSecret: checkEnvVariable(
      "SHOPIFY_API_SECRET",
      "your-shopify-api-secret"
    ),
    apiVersion: checkEnvVariable("SHOPIFY_API_VERSION", "2023-10"),
  },
  baselinker: {
    connectorUrl: checkEnvVariable(
      "BASELINKER_CONNECTOR_URL",
      "https://your-baselinker-store.myshopify.com"
    ),
    blToken: checkEnvVariable("BASELINKER_TOKEN", "your-baselinker-token"), // You can get your token in your Baselinker account
  },
};

export default config;
