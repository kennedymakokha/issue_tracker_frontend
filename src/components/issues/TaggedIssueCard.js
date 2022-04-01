import React from "react";
import { Link } from "react-router-dom";
import { EditButton } from "../general/Buttons";
import Bold from "../general/Typography/Bold";
import SmallGrayText from "../general/Typography/SmallGrayText";
import { Wrapper } from "../general/Wrapper";
import { RoundedYellow } from "./RoundedYellow";

export const TaggedIssueCard = () => {
  return (
    <Wrapper className="flex flex-col justify-between gap-3 my-2">
      {/* nav */}
      <div className="flex justify-between items-center">
        {/* rounded persona*/}
        <RoundedYellow />

        {/* poster name */}
        <Bold className="text-md">Robert Mwalugha</Bold>
        {/* date */}
        <SmallGrayText>Feb 23 2022</SmallGrayText>
      </div>
      {/* description */}
      <p className=" text-gray-700 px-1" style={{ fontSize: "13px" }}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas
        alias, voluptatum modi incidunt distinctio culpa laudantium enim odit
        ipsam. */}
        <Bold className="text-sm text-black ml-2">@PeterM</Bold>
      </p>
      {/* images section */}
      <div className="grid grid-cols-3 gap-2 px-5">
        {/* image 1 */}
        <div className="h-20 w-24 rounded">
          <img
            src="https://corporate.superdry.com/media/2825/old-plastic-ecom-bag.png"
            alt=""
            className="object-cover object-center "
          />
        </div>
        <div className="h-20 w-24 rounded">
          <img
            src="https://corporate.superdry.com/media/2825/old-plastic-ecom-bag.png"
            alt=""
            className="object-cover object-center "
          />
        </div>
        <div className="h-20 w-24 rounded">
          <img
            src="https://corporate.superdry.com/media/2825/old-plastic-ecom-bag.png"
            alt=""
            className="object-cover object-center "
          />
        </div>
      </div>
      {/* actions */}
      <div className="flex justify-end gap-2 mr-5">
        <Link to="id">
          <EditButton>Contribute</EditButton>
        </Link>
      </div>
    </Wrapper>
  );
};
