import { db } from "../config/db.js";

export const createUser = async(username,phone_no,email,password,Account_no)=>{
const query = "INSERT INTO users (name, phone, email, password,Account_no) VALUES (?,?,?,?,?)";
    const [result] = await db.execute(query,[
        username,
        phone_no,
        email,
        password,
        Account_no
    ]);

    return result;
};
export const Finduserbyemail= async(email)=>{
    const[row]= await db.execute("SELECT * FROM users WHERE email =?",[
        email,
    ]);

    return row[0];
}