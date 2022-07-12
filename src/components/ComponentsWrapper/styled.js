import styled from "styled-components";

const StyledWrapper = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : "inherit")};
  height: ${(props) => (props.height ? `${props.height}px` : "inherit")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0px")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0px")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0px")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0px")};
  padding: ${(props) => (props.padding ? `${props.padding}px` : "0px")};
`;

export { StyledWrapper };
