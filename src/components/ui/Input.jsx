import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-md px-2 py-1 placeholder-slate-400"
    />
  );
};

export default Input;
