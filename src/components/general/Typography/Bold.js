import React from "react";

const Bold = ({ children, className }) => {
  return <span className={`font-bold ${className}`}>{children}</span>;
};

export default Bold;
