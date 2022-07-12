import styled from "styled-components";
import { CustomInput } from "../Input/styled";
import Input from "../Input/Input";

export const StyledPriceInput = styled(CustomInput).attrs({
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
