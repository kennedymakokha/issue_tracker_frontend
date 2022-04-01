import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bold from "../components/general/Typography/Bold";
import NormalText from "../components/general/Typography/NormalText";
import { login } from "./../redux/actions/user.actions";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login(user));
    // if (issueData.error) {
    //   return;
    // } else {
      navigate("/");
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 px-3">
      <Bold className="text-3xl">Welcome Back</Bold>
      <NormalText>
        Login into your account to <br /> create and manage issues
      </NormalText>

      <div className="w-full flex flex-col gap-2">
        {/* email input */}
        <div className="flex flex-col gap-2">
          <label className=" font-medium">Username:</label>

          <input
            type="text"
            name="name"
            onChange={changeInput}
            className="bg-yellow-light h-12 rounded-3xl focus:outline-yellow"
          />
        </div>
        {/* password input */}
        <div className="flex flex-col gap-3">
          <label className=" font-medium">Password:</label>

          <input
            type="password"
            name="password"
            onChange={changeInput}
            className="bg-yellow-light h-12 rounded-3xl focus:outline-yellow"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-yellow text-white font-bold p-2.5 w-3/4 text-lg rounded-2xl"
      >
        Log in
      </button>
    </div>
  );
};
