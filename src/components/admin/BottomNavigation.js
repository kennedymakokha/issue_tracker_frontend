import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { RiHomeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GoClippy } from "react-icons/go";
import { Context } from "../../utils/MainContext";

const BottomNavigation = () => {
  const { currentPage, setCurrentPage } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-t-xl flex justify-center gap-8 items-center h-full">
      <button
        className={`text-2xl my-auto ${
          currentPage === "home" && "text-yellow"
        }`}
        onClick={() => {
          setCurrentPage("home");
          navigate("/admin");
        }}
      >
        <RiHomeLine />
      </button>
      <button
        className={`text-2xl my-auto ${
          currentPage === "issues" && "text-yellow"
        }`}
        onClick={() => {
          navigate("/admin/issues");
          setCurrentPage("issues");
        }}
      >
        <AiOutlineFileAdd />
      </button>

      <Link to="/admin/users">
        <button
          className={`text-2xl my-auto ${
            currentPage === "users" && "text-yellow"
          }`}
          onClick={() => setCurrentPage("users")}
        >
          <FiUsers />
        </button>
      </Link>

      <Link to="/admin/reports">
        <button
          className={`text-2xl my-auto ${
            currentPage === "report" && "text-yellow"
          }`}
          onClick={() => setCurrentPage("report")}
        >
          <GoClippy />
        </button>
      </Link>
    </div>
  );
};

export default BottomNavigation;
