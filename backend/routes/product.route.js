import express from "express";
import { createProduct } from "../Controller/product.controller.js";
import { isLogin } from "../middleware/isLogin.js";

export const productRoute = express.Router();
productRoute.post("/create-product", isLogin, createProduct);
