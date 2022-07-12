import styled from "styled-components";
import Input from "../Input/Input";

export const StyledPriceInput = styled(Input).attrs({
  type: "number",
  min: "0",
})`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  width: 100%;
`;
