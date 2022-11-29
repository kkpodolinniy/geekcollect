import React from "react";
import { CustomInput } from "./styled";

const Input = React.forwardRef(
  (
    { fromForm, name, className, type, min, onChange, placeholder, value },
    ref
  ) => {
    return (
      <CustomInput
        className={className}
        name={name}
        type={type}
        min={min}
        value={value}
        ref={ref}
        onChange={fromForm ? onChange : (e) => onChange(e.target.value)}
        placeholder={placeholder}
      ></CustomInput>
    );
  }
);
export default Input;
