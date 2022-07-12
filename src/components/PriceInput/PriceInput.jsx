import React from "react";
import { StyledPriceInput } from "./styled";

function PriceInput({ onChange, value }) {
  return (
    <StyledPriceInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Price"
    ></StyledPriceInput>
  );
}

export default PriceInput;
