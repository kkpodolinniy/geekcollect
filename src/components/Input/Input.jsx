import React from "react";
import { CustomInput } from "./styled";

const Input = React.forwardRef(
  ({ className, type, min, onChange, placeholder, value }, ref) => {
    return (
      <CustomInput
        className={className}
        type={type}
        min={min}
        value={value}
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      ></CustomInput>
    );
  }
);
export default Input;
