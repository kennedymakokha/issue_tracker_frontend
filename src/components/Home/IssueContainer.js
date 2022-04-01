import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";
import { LightWrapper } from "../general/LightWrapper";
import NormalText from "../general/Typography/NormalText";
import SmallGrayText from "../general/Typography/SmallGrayText";
import { Users } from "../general/Typography/Users";
import { Wrapper } from "../general/Wrapper";

export const IssueContainer = ({
  numberIssues = 20,
  title,
  timestamp,
  tasks,
}) => {
  return (
    <Wrapper className="h-28 flex justify-between">
      <div className="flex flex-col justify-between">
        <NormalText>{title}</NormalText>

        {/* users */}
        <Users>Robert, Okiya +</Users>

        <SmallGrayText>
          <span className="flex gap-2">
            <BsFillCalendarCheckFill />
            {timestamp}
          </span>
        </SmallGrayText>
      </div>

      <div className="flex flex-col justify-between">
        <LightWrapper className=" text-2xl flex my-auto h-10 w-10 justify-center">
          {numberIssues}
        </LightWrapper>

        <SmallGrayText>
          <span className="flex gap-2">
            <FaCheckSquare />
            {tasks}
          </span>
        </SmallGrayText>
      </div>
    </Wrapper>
  );
};
