import { product } from "../Controller/product.controller.js";
import express from "express";

export const productRoute = express.Router();
productRoute.get("/get-product",product);

