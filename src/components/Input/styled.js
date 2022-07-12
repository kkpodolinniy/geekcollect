import styled from "styled-components";

export const CustomInput = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 5px 15px;
  border-radius: 4px;

  &:focus {
    border-color: #1eb972;
  }
`;
