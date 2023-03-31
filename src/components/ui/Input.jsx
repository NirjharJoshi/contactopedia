import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="rounded-md px-2 py-1 placeholder-slate-400"
    />
  );
});

export default Input;
