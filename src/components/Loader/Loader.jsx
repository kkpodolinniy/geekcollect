import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { LoaderWrapper } from './styled';

function Loader() {
  return (
    <LoaderWrapper data-testid="loader">
      <PacmanLoader color="#f0af2d" />
    </LoaderWrapper>
  );
}

export default Loader;
