import React from "react";

const Wrapper = ({ children, className }) => {
  return <div className={` w-full    ${className || ""}`}>{children}</div>;
};

export default Wrapper;
