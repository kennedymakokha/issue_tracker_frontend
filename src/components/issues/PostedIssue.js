import React from "react";
import { Wrapper } from "../general/Wrapper";
import Bold from "../general/Typography/Bold";
import SmallGrayText from "../general/Typography/SmallGrayText";
import { IoTrashOutline } from "react-icons/io5";
import { CompleteButton, EditButton } from "../general/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { RoundedYellow } from "./RoundedYellow";

export const PostedIssue = () => {
  const navigate = useNavigate();
  return (
    <Link to="id">
      <Wrapper className="flex flex-col justify-between gap-3 my-2">
        {/* nav */}
        <div className="flex justify-between items-center">
          {/* rounded persona*/}
          <RoundedYellow />

          {/* poster name */}
          <Bold className="text-md">Robert Mwalugha</Bold>
          {/* date */}
          <SmallGrayText>Feb 23 2022</SmallGrayText>
          {/* bin */}
          <button>
            <IoTrashOutline className="text-red-500" />
          </button>
        </div>
        {/* description */}
        <p className=" text-gray-700 px-1" style={{ fontSize: "13px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quas alias, voluptatum modi incidunt distinctio culpa laudantium enim
          odit ipsam.
          <Bold className="text-sm text-black ml-2">@PeterM</Bold>
        </p>
        {/* images section */}
        <div className="flex gap-2">
          {/* image 1 */}
          <div className="h-20 w-24 bg-slate-400 rounded"></div>
          <div className="h-20 w-24 bg-slate-400 rounded"></div>
        </div>
        {/* actions */}
        <div className="flex justify-end gap-2">
          <Link as="div" to="/my_issues/create">
            <EditButton onClick={() => navigate("/my_issues/create")}>
              Edit
            </EditButton>
          </Link>
          <CompleteButton>complete</CompleteButton>
        </div>
      </Wrapper>
    </Link>
  );
};
