import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TopNavigation = ({
  title = "My Board",
  showBack = false,
  showFilter = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="nav p-4 bg-white flex justify-between items-center h-full m-auto w-full">
      {/* back button */}
      {showBack && (
        <button className="text-2xl" onClick={() => navigate(-1)}>
          <MdOutlineKeyboardBackspace />
        </button>
      )}

      {/* title */}
      <span className="text-2xl font-bold">{title}</span>

      {/* filter button */}
      <div className="h-8 w-8 flex items-center justify-center text-2xl text-yellow ">
        {showFilter && (
          <div className="flex flex-col justify-center">
            <button>
              <IoFilterOutline />
            </button>

            <span className="text-sm">filter</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
