import React from "react";
import { PacmanLoader } from "react-spinners";
import { LoaderWrapper } from "./styled";

function Loader() {
  return (
    <LoaderWrapper>
      <PacmanLoader color="#f0af2d" />
    </LoaderWrapper>
  );
}

export default Loader;
