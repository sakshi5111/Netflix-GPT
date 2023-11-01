import React, { useState } from "react";
import Header from "./Header";
import { bg_url } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleButtonClick = () => {
    //validate email and password
  };

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg_url} alt="bg-img" />
      </div>
      <form className="w-4/12 absolute p-10 my-32 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-semibold text-3xl py-4 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-2 bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 my-2 bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-2 bg-gray-700 rounded-md"
        />
        <button
          className="w-full p-4 my-4 bg-red-700 rounded-md"
          onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-gray-500 mb-20">
          <div>
            <input type="checkbox" className="" />
            Remember me
          </div>
          <p className="cursor-pointer hover:underline">Need help?</p>
        </div>
        <div className="text-gray-500">
          <p className="pb-4">
            {isSignIn ? "New to Netflix?" : "Already registered?"}
            <b
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignUp}>
              {isSignIn ? "Sign up now." : "Sign in now."}
            </b>
          </p>
          <p className="pb-20">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="cursor-pointer text-blue-500 hover:underline">
              Learn more.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
