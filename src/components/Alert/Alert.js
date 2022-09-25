import React from 'react';

import { StyledAlert } from "./Alert.styled";
import themeSettings from "../../../01/themeSettings";
import { ThemeProvider } from "styled-components";

const Alert = ({ variant, children }) => {
  return (
    <ThemeProvider theme={themeSettings}>
      <StyledAlert variant={variant}>{children}</StyledAlert>
    </ThemeProvider>
  );
};

export default Alert;