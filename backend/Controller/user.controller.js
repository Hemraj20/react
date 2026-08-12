import { db } from "../config/db.js";
import { createUser, Finduserbyemail } from "../Services/user.Services.js";

export const registerUser =async(req,res)=>{
   
    const {username,phone_no,email,password,Account_no} = req.body;
    if(!username || !phone_no || !email || !password || !Account_no){
        return res.status(400).json({
            message:"Hi"
        })
    }
    const returnMSg = await createUser(username,phone_no,email,password,Account_no);


    
    res.json({
        message: "Register-User",
        returnMSg,
    })
};

export const LoginUser = async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password is required"});
    }
  const returnUser= await Finduserbyemail(email);
  if(!returnUser){
    return res.status(400).json({
        message:"Email not match",
    })
}
    if(returnUser.password !==password){
    return res.status(401).json({
        message:"Invalid Credentials",
    })
  }

  res.json({message:"Login success",returnUser});

};
  
