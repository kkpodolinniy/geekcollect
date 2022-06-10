import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Staatliches", cursive;
  font-size: 48px;
  letter-spacing: 0.12px;
`;

function PageTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default PageTitle;
