import { Request, Response } from "express";
import getProductList from "../services/getProductList.js";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductList();
    res.json(products); // Send the response as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

export default getProducts;
