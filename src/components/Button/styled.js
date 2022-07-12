import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 37px;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  position: relative;
  &:active {
    top: 2px;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => (props.outlined ? "#0190f8" : "white")};
      background-color: ${(props) =>
        props.outlined ? "transparent" : "#0190f8"};
      border: ${(props) => (props.outlined ? "1px solid #0190f8" : "none")};
    `}

  ${(props) =>
    props.success &&
    css`
      color: ${(props) => (props.outlined ? "#1eb972" : "white")};
      background-color: ${(props) =>
        props.outlined ? "transparent" : "#1eb972"};
      border: ${(props) => (props.outlined ? "1px solid #1eb972" : "none")};
    `}

    ${(props) =>
    props.warning &&
    css`
      color: ${(props) => (props.outlined ? "#f0af2d" : "white")};
      background-color: ${(props) =>
        props.outlined ? "transparent" : "#f0af2d"};
      border: ${(props) => (props.outlined ? "1px solid #f0af2d" : "none")};
    `}

    ${(props) =>
    props.danger &&
    css`
      color: ${(props) => (props.outlined ? "#ea4f30" : "white")};
      background-color: ${(props) =>
        props.outlined ? "transparent" : "#ea4f30"};
      border: ${(props) => (props.outlined ? "1px solid #ea4f30" : "none")};
    `}
`;
