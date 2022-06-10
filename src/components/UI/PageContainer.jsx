import React from "react";
import styled from "styled-components";

const StyledConteiner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function PageContainer(props) {
  return <StyledConteiner {...props}>{props.children}</StyledConteiner>;
}

export default PageContainer;
