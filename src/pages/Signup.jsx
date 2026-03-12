import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImage from "../assets/login-image.png";

const Signup = () => {
    return (
        <div className="max-h-screen flex">

            {/* LEFT SECTION */}
            <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">

                <div className="max-w-md">
                    <div className="flex items-center gap-2">
                        <Link to="/"><img src={logo} className="h-15" /></Link>
                    </div>


                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                        Start growing your business on WhatsApp
                    </h2>

                    <img
                        src={loginImage}
                        alt="illustration"
                        className="w-full"
                    />
                </div>

            </div>


            {/* RIGHT SECTION */}
            <div className="w-1/2 flex justify-center items-center bg-white">

                <div className="w-96">

                    <p className="text-gray-400 text-sm text-center mb-2">
                        CREATE ACCOUNT
                    </p>

                    <h2 className="text-2xl font-bold text-center mb-6">
                        Sign up to AiSensy
                    </h2>


                    {/* Google Signup */}
                    <button className="w-full bg-blue-400 text-white py-3 rounded-lg mb-4 flex justify-center items-center gap-2 hover:bg-blue-500">
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


                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
                    />

                    {/* Phone */}
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
                    />
                    {/* Signup Button */}
                    <button className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-500">
                        Create Account
                    </button>


                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-500 font-semibold">
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Signup;