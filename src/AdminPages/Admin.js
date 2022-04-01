import React from "react";
import { AdminLayout } from "../components/admin/AdminLayout";
import { MdOutlineBackHand } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import Bold from "../components/general/Typography/Bold";
import { PostedIssue } from "../components/issues/PostedIssue";
import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <AdminLayout navigation={{ title: "Admin" }}>
      {/* Cards */}
      <div className="grid grid-cols-3 justify-items-center w-full my-4">
        <IssueCard className="bg-blue-100">
          <div className="p-2 rounded-full bg-blue-800">
            <MdOutlineBackHand className="text-2xl text-white" />
          </div>
          <span className="text-xs font-medium">Raised Issues</span>

          <Bold>30</Bold>
        </IssueCard>

        <IssueCard className="bg-red-100">
          <div className="p-2 rounded-full bg-red-500">
            <GoAlert className="text-2xl text-white" />
          </div>
          <span className="text-xs font-medium">Unresolved</span>

          <Bold>30</Bold>
        </IssueCard>

        <IssueCard className="bg-orange-100">
          <div className="p-2 rounded-full bg-yellow">
            <BiCheckShield className="text-3xl text-white" />
          </div>

          <span className="text-xs font-medium">Solved Issues</span>

          <Bold>30</Bold>
        </IssueCard>
      </div>

      {/* Issues */}
      <div className="px-4">
        {/* header */}
        <div className="flex justify-between">
          <Bold className="text-2xl">Issues</Bold>

          <Link to="/admin/issues">
            <span className="text-yellow font-medium">See more</span>
          </Link>
        </div>

        {/* issue cards div */}
        <div className="flex flex-col gap-2">
          <PostedIssue />
          <PostedIssue />
          <PostedIssue />
          <PostedIssue />
        </div>
      </div>
    </AdminLayout>
  );
};

export const IssueCard = ({ className, children }) => (
  <div
    className={`h-28 w-26 text-center rounded-xl flex flex-col gap-1 items-center justify-center ${className}`}
  >
    {children}
  </div>
);
