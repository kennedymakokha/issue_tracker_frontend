import React from "react";

export const Wrapper = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg p-3 ${className} `}>{children}</div>
  );
};
