import { useState } from "react";
import Buttons from "./Shared/Buttons";
import { Link } from "react-router-dom";

const PasswordHideShow = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email,setEmail]= useState("");
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center">

      <div className="bg-white w-[420px] rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          
        </p> 

        {/* Username */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Username
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 outline-none focus:border-blue-600 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>

          <div className="flex">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 outline-none focus:border-blue-600 transition"
          />
        <Buttons
          title={showPassword? "Hide":"Show"}
          onClick={togglePassword}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 h-14 w-30 "
        />
          </div>
    
        </div>

        {/* Button */}
       
    <Link to="/Signing">
<Buttons
          title="Sign In"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
        />     
    
    </Link>
     
     
   
       
      
      </div>

    </div>
  );
};

export default PasswordHideShow;