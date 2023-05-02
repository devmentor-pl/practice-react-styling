import React from 'react';
import { ThemeProvider } from "styled-components";

import { StyledAlert } from "./styled/Alert.styled";

import theme from "./styled/theme";

const Alert = ({ variant, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAlert variant={variant}>{children}</StyledAlert>
    </ThemeProvider>
  );
};

export default Alert;