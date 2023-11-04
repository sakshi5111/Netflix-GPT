import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_url } from "../utils/constants";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate email and password

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //sign in/ sign up
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-10 my-32 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-semibold text-3xl py-4 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-2 bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-4 my-2 bg-gray-700 rounded-md"
        />
        <div className="flex">
          <input
            ref={password}
            type={passwordType}
            placeholder="Password"
            className="w-full p-4 my-2 bg-gray-700 rounded-md "
          />
          <i className="fa-regular fa-eye pt-7 absolute right-14"></i>
          {passwordType === "password" ? (
            <span onClick={() => setPasswordType("text")}>
              <i className="fa-regular fa-eye-slash pt-7 absolute right-14 cursor-pointer"></i>
            </span>
          ) : (
            <span onClick={() => setPasswordType("password")}>
              <i className="fa-regular fa-eye pt-7 absolute right-14 cursor-pointer"></i>
            </span>
          )}
        </div>
        <div>
          <div className="text-xs text-gray-400">
            Password must have
            <ul className="list-disc pl-3">
              <li>a minimum of 1 lower case letter</li>
              <li>a minimum of 1 upper case letter </li>
              <li>a minimum of 1 numeric character </li>
              <li>a minimum of 1 special characte</li>
            </ul>
          </div>
        </div>
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button
          className="w-full p-4 my-4 bg-red-700 rounded-md"
          onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-gray-500 mb-6">
          <div>
            <input type="checkbox" className="" />
            Remember me
          </div>
          <p className="cursor-pointer hover:underline">Need help?</p>
        </div>
        <div className="text-gray-500 text-center">
          <p className="pb-2">
            {isSignIn ? "New to Netflix? " : "Already registered? "}
            <b
              className="text-white cursor-pointer hover:underline"
              onClick={toggleSignUp}>
              {isSignIn ? "Sign up now." : "Sign in now."}
            </b>
          </p>
          <p className="pb-2">
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
