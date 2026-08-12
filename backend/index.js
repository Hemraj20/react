import express from "express";
import dotenv from "dotenv";
dotenv.config();


import { productRoute } from "./routes/product.route.js";
import { db } from "./config/db.js";
import { userRoute } from "./routes/user.route.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())
const PORT = 3000;

db.getConnection((err)=>{
    if(err){
        return console.log("Database not connected", err.message);
    }else{
    console.log("Database connected")
    }
})
app.use("/api/v1/product",productRoute)
app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    console.log(` aha tamatar badhe majedar wah tamatar badhe majedar.. is running on ${PORT}`);
});