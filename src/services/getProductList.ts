import * as baselinker from "./baselinker.js";

export default async function getProductList() {
  const parameters = { inventory_id: "3807", page: 1 };
  return baselinker.post({ method: "getInventoryProductsList", parameters });
}
