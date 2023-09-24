import React from "react";
import { ThemeProvider } from "styled-components";

import { StyledButton } from "./styled/Button.styled";

import theme from "./styled/theme";

const Button = ({ children, ...attributes }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton {...attributes}>{children}</StyledButton>
    </ThemeProvider>
  );
};

export default Button;
