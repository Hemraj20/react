import db from "../config/db.js";
import { createUser, Finduserbyemail } from "../Services/user.Services.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const registerUser = async (req, res) => {
  const { username, phone_no, email, password, Account_no } = req.body;
  if (!username || !phone_no || !email || !password || !Account_no) {
    return res.status(400).json({
      message: "Hi",
    });
  }

  const hasPassword = await bcrypt.hash(password, 10);
  const returnMSg = await createUser(
    username,
    phone_no,
    email,
    hasPassword,
    Account_no,
  );

  res.json({
    message: "Register-User",
    returnMSg,
  });
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password is required" });
  }
  const returnUser = await Finduserbyemail(email);
  if (!returnUser) {
    return res.status(400).json({
      message: "Email not match",
    });
  }
  const isMatch = await bcrypt.compare(password, returnUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Password not match" });
  }

  // Generating JWT Token
  const token = jwt.sign(
    {
      id: returnUser.id,
      username: returnUser.name,
      phone: returnUser.phone,
      email: returnUser.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
    },
  );
  
// Storing Token on a Browser
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 100, // Browser set time is 7days.
  });

  const { password: _, ...userWithoutPassword } = returnUser;

  res.json({
    message: "Login success",
    user: userWithoutPassword,
    token: token,
  });
};
