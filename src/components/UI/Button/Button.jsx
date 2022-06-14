import React from "react";
import { StyledButton } from "./styled";

function Button(props) {
  return <StyledButton {...props} onClick={props.onClick}></StyledButton>;
}

export default Button;
