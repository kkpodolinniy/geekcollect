import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0190f8",
    success: "#1eb972",
    warning: "#f0af2d",
    danger: "#ea4f30",
  },
  fonts: ["sans-serif", "Roboto", "Staatliches", "'Karla', sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  margin: {
    "m--5": "5px",
    "m--10": "10px",
    "m--15": "15px",
    "m--20": "20px",
  },
  padding: {
    "p--5": "5px",
    "p--10": "10px",
    "p--15": "15px",
    "p--20": "20px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
