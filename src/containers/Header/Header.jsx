import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./styled";

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">Collection</NavLink>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/explore">Explore</NavLink>
    </StyledHeader>
  );
}

export default Header;
