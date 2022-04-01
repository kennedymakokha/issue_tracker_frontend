import React from "react";
import { LightWrapper } from "../general/LightWrapper";

export const IssuesCard = ({ icon, numberIssues, title }) => {
  return (
    <div className="p-3 bg-white rounded-md h-32 w-36 flex flex-col gap-2">
      {/* icon */}
      <LightWrapper className="text-yellow text-3xl flex h-10 w-10">
        {icon}
      </LightWrapper>

      {/* text */}
      <div className="flex justify-around ">
        {/* text */}
        <div className="w-3/5">{title}</div>
        {/* item count */}
        <div className="flex flex-col items-center justify-around">
          {/* count */}
          <span className="font-bold text-xl">{numberIssues}</span>
          <span className="text-xs text-gray-400 font-medium">pending</span>
          {/* status */}
        </div>
      </div>
    </div>
  );
};
