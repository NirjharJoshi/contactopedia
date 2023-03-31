import React, { forwardRef } from "react";

const Input = forwardRef(({ className, type, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
});

export default Input;
