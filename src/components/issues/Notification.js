import React from "react";
import Bold from "../general/Typography/Bold";
import SmallGrayText from "../general/Typography/SmallGrayText";
import { Wrapper } from "../general/Wrapper";

export const Notification = ({ isViewed = false, title, message, time }) => {
  return (
    <Wrapper className="flex gap-2">
      {/* notification red */}
      <div className="flex items-center">
        {!isViewed && (
          <div className="rounded-full text-white font-medium  bg-notification-red text-xs flex items-center justify-center h-2 w-2" />
        )}
      </div>
      {/* details */}

      <div className="flex flex-col gap-1 ">
        <Bold className="text-sm">{title}</Bold>

        <p className={` text-gray-700 px-1 text-xs `}>{message}</p>
      </div>

      {/* time */}
      <div className="flex items-end">
        <SmallGrayText className="">{time}</SmallGrayText>
      </div>
    </Wrapper>
  );
};
