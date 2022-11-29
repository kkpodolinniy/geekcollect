import React from "react";
import { ErrorWrapper, ErrorMessageText } from "./styled";
import ErrorIcon from "@mui/icons-material/Error";

function ErrorMessage({ text }) {
  return (
    <ErrorWrapper>
      <ErrorIcon sx={{ fontSize: 20, color: "red", cursor: "pointer" }} />
      <ErrorMessageText>{text}</ErrorMessageText>
    </ErrorWrapper>
  );
}

export default ErrorMessage;
