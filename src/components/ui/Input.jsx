import React, { forwardRef } from "react";

const Input = forwardRef(({ defaultValue, type, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      defaultValue={defaultValue}
      type={type}
      placeholder={placeholder}
      className="rounded-md px-2 py-1 placeholder-slate-400"
    />
  );
});

export default Input;
