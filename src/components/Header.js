import React from "react";
import { logo, user_logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />

      {user && (
        <div className="pt-2 flex">
          <img
            className="w-10 h-10 rounded-lg"
            alt="user-icon"
            src={user_logo}
          />
          <p
            className="text-white font-bold cursor-pointer pl-3 pt-2 hover:text-red-500"
            onClick={handleSignOut}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
