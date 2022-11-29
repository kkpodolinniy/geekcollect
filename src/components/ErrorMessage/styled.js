import styled, { css } from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: fit-content;

  ${(props) =>
    props.text &&
    css`
      display: none;
    `}
`;

export const ErrorMessageText = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  margin: 0;
  color: #d63301;
  margin-left: 5px;
`;
