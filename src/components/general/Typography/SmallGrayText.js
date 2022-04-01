import React from "react";

const SmallGrayText = ({ children, className }) => {
  return (
    <span className={`text-gray-400 font-medium text-xs ${className}`}>
      {children}
    </span>
  );
};

export default SmallGrayText;
