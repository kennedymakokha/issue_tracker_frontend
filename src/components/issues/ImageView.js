import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ImageView = ({ src }) => {
  return (
    <div className="flex flex-col items-end h-24 w-24 rounded-lg">
      <button className=" text-notification-red" type="button">
        <AiOutlineClose />
      </button>
      <img
        src="https://corporate.superdry.com/media/2825/old-plastic-ecom-bag.png"
        alt="upload"
        className="object-cover object-center rounded-xl"
      />
    </div>
  );
};
