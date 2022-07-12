import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import RootContainer from "../layouts/RootContainer";

function MainLayout() {
  return (
    <>
      <Header />
      <RootContainer>
        <Outlet />
      </RootContainer>
    </>
  );
}

export default MainLayout;
