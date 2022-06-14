import React from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e5f7;
  opacity: 1;
  background-color: #e5e5f7;
  opacity: 1;
  padding-top: 20px;
  background-image: linear-gradient(
      30deg,
      #1eb972 12%,
      transparent 12.5%,
      transparent 87%,
      #1eb972 87.5%,
      #1eb972
    ),
    linear-gradient(
      150deg,
      #1eb972 12%,
      transparent 12.5%,
      transparent 87%,
      #1eb972 87.5%,
      #1eb972
    ),
    linear-gradient(
      30deg,
      #1eb972 12%,
      transparent 12.5%,
      transparent 87%,
      #1eb972 87.5%,
      #1eb972
    ),
    linear-gradient(
      150deg,
      #1eb972 12%,
      transparent 12.5%,
      transparent 87%,
      #1eb972 87.5%,
      #1eb972
    ),
    linear-gradient(
      60deg,
      #1eb97277 25%,
      transparent 25.5%,
      transparent 75%,
      #1eb97277 75%,
      #1eb97277
    ),
    linear-gradient(
      60deg,
      #1eb97277 25%,
      transparent 25.5%,
      transparent 75%,
      #1eb97277 75%,
      #1eb97277
    );
  background-size: 26px 46px;
  background-position: 0 0, 0 0, 13px 23px, 13px 23px, 0 0, 13px 23px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #eeeeee;
  height: inherit;
  border-radius: 4px;
  padding: 15px 15px 0 15px;
  border-left: 6px solid #f0af2d;
  border-right: 6px solid #f0af2d;
`;

function RootContainer({ children }) {
  return (
    <StyledRoot>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledRoot>
  );
}

export default RootContainer;
