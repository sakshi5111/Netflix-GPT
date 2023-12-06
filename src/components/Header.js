import React, { useEffect } from "react";
import { logo, user_avatar } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, sign up we add user in the store
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out then it will remove from the store
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />

      {user && (
        <div className="pt-2 flex">
          <img
            className="w-10 h-10 rounded-md"
            alt="user-icon"
            src={user_avatar}
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
