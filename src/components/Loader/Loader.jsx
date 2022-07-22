import React from "react";
import { PacmanLoader } from "react-spinners";
import { LoaderWrapper } from "./styled";

function Loader() {
  return (
    <LoaderWrapper>
      <PacmanLoader />
    </LoaderWrapper>
  );
}

export default Loader;
