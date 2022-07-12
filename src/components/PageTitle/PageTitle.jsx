import React from "react";
import { TitleWrapper, StyledTitle } from "./styled";
function PageTitle({ children }) {
  return (
    <TitleWrapper>
      <StyledTitle>{children}</StyledTitle>
    </TitleWrapper>
  );
}

export default PageTitle;
