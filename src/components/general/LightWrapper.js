import React from "react";

export const LightWrapper = ({ children, className }) => {
  return (
    <div
      className={`flex bg-yellow-light items-center  rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};
