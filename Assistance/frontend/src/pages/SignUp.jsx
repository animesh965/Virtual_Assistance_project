import React, { useContext } from "react";
import bg from "../assets/assistance.jpg";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import UserContext, { userDataContext } from "../context/userContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {serverUrl}=useContext(userDataContext) 
      const handleSignup = async()=>{
try {
    // console.log("hello how are you very important ")
    // let 
    // let result = await axios.post(`${serverUrl}/api/auth/signup`) 
} catch (error) {
    
}
    }

  return (
    <div
      className="w-full h-[100vh] bg-cover flex justify-center item-center"
      style={{ backgroundImage: `url(${bg})` }} 
    >
      signup page
      <form className="mt-30 px-[20px] w-[90%] h-[500px] max-w-[500px] bg-[#201c1c00] backdrop-blur shadow-lg shadow-black-500 flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-white text-[30px] font-semibold">
          Register to{" "}
          <span className="text-2xl text-blue-400">Virtual Assistnce</span>
        </h1>
        <input
          type="text"
          required   
          onChange={(e) => setName(e.target.value)} 
          value={name}
          placeholder="Enter your name" 
          className=" text-xl px-3 py-1 w-full h-[60px] outline-none border-2 border-white bg-transparent rounded-full text-white  placeholder-gray-100"
        />
        <input 
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email} 
          placeholder="example@mail.com"
          className=" text-xl px-3 py-1 w-full h-[60px] outline-none border-2 border-white bg-transparent rounded-full text-white placeholder-gray-100" 
        />
           
        <div className=" text-xl px-3 py-1 w-full h-[60px] outline-none border-2 border-white bg-transparent rounded-full text-white placeholder-gray-100">
          <input
            type={showPassword ? "text" : "password"}
            required
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            placeholder="password"
            className="w-full h-full rounded-full outline-none bg-transparent px-3 py-1 text-white"


          /> 
          {/* {!setShowPassword &&  
                <IoMdEye onClick={()=>setShowPassword(true)} className='absolute top-87 right-10 size-[30px] text-white'/>}
                {setShowPassword && 
                <IoMdEyeOff onClick={()=>setShowPassword(true)} className='absolute top-87 right-10 size-[30px] text-white'/>} */}

          {showPassword ? (
            <IoMdEyeOff
              onClick={() => setShowPassword(false)}
              className="  absolute top-78 right-10 transform -translate-y-1/2 size-[30px] text-white cursor-pointer"
            />
          ) : ( 
            <IoMdEye
              onClick={() => setShowPassword(true)}
              className="absolute top-78 right-10 transform -translate-y-1/2 size-[30px] text-white cursor-pointer"
              />
          )}
        </div> 

        <button className="mt-5 min-w-[150px] h-[60px] text-xl text-gray-900  rounded-full px-3 py-1 bg-blue-200">
          {" "} 
          Signup{" "} 
        </button>
        <p className="text-white" onClick={() => navigate("/login")}>
          {" "}
          Already have an account ?{" "}
          <span className="font-semibold text-xl text-blue-300">
            Login
          </span>{" "} 
        </p>
      </form>
    </div>
  );
};

export default SignUp;
