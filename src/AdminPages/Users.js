import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AdminLayout } from "../components/admin/AdminLayout";
import { AddButton } from "../components/general/Buttons";
import Bold from "../components/general/Typography/Bold";
import { RoundedYellow } from "../components/issues/RoundedYellow";
import { getUsers } from "./../redux/actions/user.actions";
export const Users = () => {
  const dispatch = useDispatch();
 

  const users = useSelector((state) => state.userDetails.users);
  console.log(users);

   useEffect(() => {
     dispatch(getUsers());
   }, []);

  return (
    <AdminLayout navigation={{ title: "Users", showBack: true }}>
      <div className="flex flex-col gap-3">
        {users &&
          users.map((u, i) => (
            <UserCard name={u.name} status={u.status} key={i} />
          ))}

        <div className="absolute bottom-24 right-2">
          <AddButton to="/admin/new_user" />
        </div>
      </div>
    </AdminLayout>
  );
};

const UserCard = ({ name, status }) => (
  <Link to="user">
    <div className="flex justify-around items-center bg-white rounded-xl py-3">
      <RoundedYellow />

      <div className="w-6/12 flex flex-col gap-1">
        <Bold className="">{name}</Bold>

        <Status status={status} />
      </div>

      {status === "deactivated" ? (
        <button className=" bg-green-100 text-success-green px-2 rounded-lg h-8 font-bold text-xs">
          Activate
        </button>
      ) : (
        <button className=" bg-red-100 text-red-600 px-2 rounded-lg h-8 font-bold text-xs">
          Deactivate
        </button>
      )}

      {/* <CompleteButton>Activate</CompleteButton> */}
    </div>
  </Link>
);

const Status = ({ status }) =>
  status === "active" ? (
    <span className="text-success-green text-xs font-medium">Active</span>
  ) : (
    <span className="text-red-500 text-xs font-medium">Deactivated</span>
  );
