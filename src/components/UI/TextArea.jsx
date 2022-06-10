import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  height: 150px;
  width: 100%;
  padding: 12px 20px;
  background-color: #f8f8f8;
  border: 2px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
  outline: 0;

  &:focus {
    outline: none !important;
    border-color: #1eb972;
  }
`;

function TextArea() {
  return <StyledTextArea />;
}

export default TextArea;
