import React from "react";
import { CompleteButton } from "../general/Buttons";
import Bold from "../general/Typography/Bold";
import { DescriptionGrayText } from "../general/Typography/DescriptionGrayText";
import SmallGrayText from "../general/Typography/SmallGrayText";
import { Wrapper } from "../general/Wrapper";
import { Divider } from "./Divider";
import { PostedIssueReply } from "./PostedIssueReply";
import { RoundedYellow } from "./RoundedYellow";

/**
 * View a posted issue in details
 * posted issue has replies in it
 */
const PostedIssueView = () => {
  return (
    <Wrapper className="flex flex-col justify-between my-2 gap-1">
      {/* nav */}
      <div className="flex justify-between items-center">
        {/* rounded persona*/}
        <RoundedYellow />

        {/* poster name */}
        <Bold className="text-md">Robert Mwalugha</Bold>
        {/* date */}
        <SmallGrayText>Feb 23 2022</SmallGrayText>
        {/* bin */}
      </div>
      {/* margined wrapper */}
      <div className="ml-6 flex flex-col gap-3">
        {/* description */}
        <DescriptionGrayText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quas alias, voluptatum modi incidunt distinctio culpa laudantium enim
          odit ipsam.
          <Bold className="text-sm text-black ml-2">@PeterM</Bold>
        </DescriptionGrayText>
        {/* images section */}
        <div className="flex gap-2">
          {/* image 1 */}
          <div className="h-20 w-24 bg-slate-400 rounded"></div>
          <div className="h-20 w-24 bg-slate-400 rounded"></div>
        </div>

        <PostedIssueReply />
        {/* divider */}
        <Divider />

        <PostedIssueReply />

        <Divider />

        <PostedIssueReply />
      </div>
      {/* actions */}
      <div className="flex justify-end gap-2">
        <CompleteButton>complete</CompleteButton>
      </div>
    </Wrapper>
  );
};

export default PostedIssueView;
