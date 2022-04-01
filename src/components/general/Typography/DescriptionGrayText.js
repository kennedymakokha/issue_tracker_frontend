import React from "react";

export const DescriptionGrayText = ({ children, className }) => {
  return (
    <p
      className={` text-gray-700 px-1 ${className}`}
      style={{ fontSize: "13px" }}
    >
      {children}
    </p>
  );
};
