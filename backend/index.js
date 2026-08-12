import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { productRoute } from "./routes/product.route.js";
import  db  from "./config/db.js";
import { userRoute } from "./routes/user.route.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
// to send body data to req.body
app.use(bodyParser.json())

// to send token req.cookies
app.use(cookieParser())
const PORT = 3000;


app.use("/api/v1/product",productRoute)
app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    console.log(` aha tamatar badhe majedar wah tamatar badhe majedar.. is running on ${PORT}`);
});