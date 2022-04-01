import React from "react";
import Bold from "../general/Typography/Bold";
import { DescriptionGrayText } from "../general/Typography/DescriptionGrayText";
import { RoundedYellow } from "./RoundedYellow";

/**
 *
 * @returns reply from tagged user or any other user.
 */

export const PostedIssueReply = () => {
  return (
    <div className="mt-2 ">
      {/* top bar */}

      <div className="flex justify-between items-center">
        {/* rounded persona*/}
        <RoundedYellow />

        {/* poster name */}
        <Bold className="text-md">Robert Mwalugha</Bold>
        {/* date */}
        <Bold className="text-sm">Response</Bold>
        {/* bin */}
      </div>

      <DescriptionGrayText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui
        dignissimos eligendi explicabo. Dignissimos veritatis amet suscipit
        praesentium?
      </DescriptionGrayText>
    </div>
  );
};
