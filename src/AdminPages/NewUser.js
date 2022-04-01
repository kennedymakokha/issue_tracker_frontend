import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { AdminLayout } from "../components/admin/AdminLayout";
import Bold from "../components/general/Typography/Bold";
import { postuser } from "./../redux/actions/user.actions";
// postuser;

export const NewUser = () => {
  const navigate = useNavigate();

  const users = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const disatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [successMesage, setSucessMessage] = useState("");
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      disatch(postuser(user));
      // console.log(response);
      if (users.error) {
        return;
      } else {
        navigate("/admin/users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminLayout navigation={{ title: "Reports" }}>
      <form className="p-5 flex flex-col gap-3">
        <div className="text-center">
          <span className="text-xl font-medium">New User</span>
        </div>
        {users.error && (
          <div className="h-12 bg-yellow-light rounded-xl mx-2 flex justify-center items-center text-red-500">
            errrow
          </div>
        )}
        {successMesage && (
          <div className="h-12 bg-yellow-light rounded-xl mx-2 flex justify-center items-center text-red-500">
            {successMesage}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Bold className="text-sm"> Username</Bold>

          <input
            name="name"
            onChange={changeInput}
            className="h-12 bg-yellow-light rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Bold className="text-sm">Password</Bold>

          <input
            name="password"
            type="password"
            onChange={changeInput}
            className="h-12 bg-yellow-light rounded-xl"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className={`py-3 rounded-xl font-bold bg-yellow text-white w-5/6 mx-auto mt-5`}
        >
          Add User
        </button>
      </form>
    </AdminLayout>
  );
};
