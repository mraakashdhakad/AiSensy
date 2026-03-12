import React from "react";
import logo from "../assets/logo.png";
import loginImage from "../assets/login-image.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-h-screen flex">

      {/* Left Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        
        <div className="text-left max-w-md">
          <div className="flex items-center gap-2">
          <Link to="/"><img src={logo} className="h-15" /></Link>
        </div>
              
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Send personalized campaigns on WhatsApp
          </h2>

          <img
            src={loginImage}
            alt="illustration"
            className="w-full"
          />
        </div>

      </div>


      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center bg-white">

        <div className="w-96">

          <p className="text-gray-400 text-sm mb-2 text-center">
            WELCOME BACK
          </p>

          <h2 className="text-2xl font-bold text-center mb-6">
            Log in to AiSensy
          </h2>


          {/* Google Button */}
          <button className="w-full bg-blue-400 text-white py-2 rounded-lg mb-4 flex justify-center items-center gap-2 hover:bg-blue-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              className="w-5"
            />
            Continue with Google
          </button>


          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>


          {/* Email */}
          <input
            type="text"
            placeholder="Username / Email"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
          />


          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
          />


          {/* Continue Button */}
          <button className="w-full bg-blue-400 hover:bg-blue-500 py-2 rounded-lg text-white font-semibold">
            Continue
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Create your account?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>

          <p className="text-center text-sm text-blue-500 mt-4 cursor-pointer">
            Forgot Password?
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;