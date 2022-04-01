import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBell, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BottomNavigation = () => {
  return (
    <div className="bg-white rounded-t-xl flex justify-around items-center h-full">
      <Link to="/">
        <button className="text-3xl">
          <AiOutlineHome />
        </button>
      </Link>
      <Link to="/my_issues/create">
        <button className="text-xl bg-yellow text-white p-3 rounded-full">
          <BsPlusLg />
        </button>
      </Link>

      <Link to="/notifications">
        <button className="text-3xl relative">
          <div className="rounded-full text-white font-medium absolute right-0 top-0 bg-notification-red text-xs flex items-center justify-center p-2 h-4 w-4">
            1
          </div>
          <BsBell />
        </button>
      </Link>
    </div>
  );
};
