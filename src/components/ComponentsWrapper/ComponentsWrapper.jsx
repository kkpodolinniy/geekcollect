import React from "react";
import { StyledWrapper } from "./styled";

function ComponentsWrapper(props) {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
}

export default ComponentsWrapper;
