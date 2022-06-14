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
  const options = [
    { id: 1, key: "favorites", value: "My favorites" },
    { id: 2, key: "rare", value: "Rare Stuff" },
    { id: 3, key: "ponies", value: "Cute Ponies" },
    { id: 4, key: "board", value: "Board games" },
  ];
  return (
    <StyledSelect
      {...props}
      onChange={(e) => props.select(e.target.value)}
      id="select-collection"
      name="select"
    >
      {options.map((option) => (
        <option key={option.id} value={option.key}>
          {option.value}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
