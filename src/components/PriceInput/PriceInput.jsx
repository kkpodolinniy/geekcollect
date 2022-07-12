import React from "react";
import { StyledPriceInput } from "./styled";

function PriceInput({ onChange, value }) {
  return (
    <StyledPriceInput
      value={value}
      onChange={onChange}
      placeholder="Price"
    ></StyledPriceInput>
  );
}

export default PriceInput;
