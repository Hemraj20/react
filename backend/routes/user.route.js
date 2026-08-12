import { LoginUser, registerUser } from "../Controller/user.controller.js";
import express from "express"

export const userRoute = express.Router();
userRoute.post("/register-user",registerUser);
userRoute.post("/LoginUser",LoginUser);