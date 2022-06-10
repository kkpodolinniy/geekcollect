import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  background-color: #f8f8f8;
  border: 2px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  padding: 6px 10px;
  border-radius: 2px;
`;

function Select(props) {
  return (
    <StyledSelect {...props} id="select-collection" name="select">
      <option value="value1">My favorites</option>
      <option value="value2">Rare Stuff</option>
      <option value="value3">Cute Ponies</option>
      <option value="value3">Board games</option>
    </StyledSelect>
  );
}

export default Select;
