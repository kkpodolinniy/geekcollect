import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts[2]};
  font-size: 48px;
  letter-spacing: 0.12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
