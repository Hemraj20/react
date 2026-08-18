import express from "express";
import {
  createProduct,
  deleteProduct,
  getALlProduct,
  getProductBySlug,
  updatedProduct,
} from "../Controller/product.controller.js";
import { isLogin } from "../middleware/isLogin.js";

export const productRoute = express.Router();
productRoute.post("/create-product", isLogin, createProduct);
productRoute.get("/get-product", getALlProduct);
productRoute.delete("/delete/:id", deleteProduct );
productRoute.put("/update/:id", updatedProduct );
productRoute.get("/get/:productSlug", getProductBySlug );

