import * as baselinker from "./connectors/baselinker.js";

export default async function getProductList() {
  const parameters = { inventory_id: "3807", page: 1 };
  const data = await baselinker.post({
    method: "getInventoryProductsList",
    parameters,
  });

  const transformedData = Object.keys(data.products).map((productId) => {
    const product = data.products[productId];
    return {
      id: product.id,
      ean: product.ean,
      name: product.name,
      price: product.prices["3624"], // Example of selecting a specific price
      stock: product.stock["bl_5076"],
    };
  });

  return transformedData;
}

// prepare import to Shopify
