import React from "react";

const Button = ({ className, onClick, children, type = "button" }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
