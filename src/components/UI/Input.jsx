import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  padding: 5px 10px;

  &:focus {
    border-color: #1eb972;
  }
`;

function Input() {
  return <CustomInput type="text" placeholder="Add Name..."></CustomInput>;
}

export default Input;
