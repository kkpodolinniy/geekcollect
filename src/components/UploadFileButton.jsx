import React from "react";
import styled from "styled-components";
import ComponentsWrapper from "./ComponentsWrapper/ComponentsWrapper";

const StyledUploadFileButton = styled.input`
  display: none;
`;
const StyledUploadFileLabel = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
`;

function UploadFileButton(props) {
  return (
    <ComponentsWrapper width={"200"}>
      <StyledUploadFileButton
        {...props}
        onChange={props.onChange}
        type="file"
        id="file-upload"
      />
      <StyledUploadFileLabel htmlFor="file-upload">
        Upload Photo Here...
      </StyledUploadFileLabel>
    </ComponentsWrapper>
  );
}

export default UploadFileButton;
