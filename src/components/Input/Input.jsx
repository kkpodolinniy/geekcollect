import React from "react";
import { CustomInput } from "./styled";

const Input = React.forwardRef(({ onChange, placeholder, value }, ref) => {
  return (
    <CustomInput
      value={value}
      ref={ref}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      placeholder={placeholder}
    ></CustomInput>
  );
});
export default Input;
