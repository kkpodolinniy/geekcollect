import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid #ccc;

  & a {
    text-decoration: none;
    font-family: "Karla", sans-serif;
    font-size: 18px;
    color: black;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">Collection</Link>
      <Link to="/add">Add</Link>
      <Link to="/explore">Explore</Link>
    </StyledHeader>
  );
}

export default Header;
