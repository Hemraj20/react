import { LoginUser, logoutUser, registerUser } from "../Controller/user.controller.js";
import express from "express"

export const userRoute = express.Router();
userRoute.post("/register-user",registerUser);
userRoute.post("/LoginUser",LoginUser);
userRoute.post("/Logout-User",logoutUser);