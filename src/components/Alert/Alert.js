import React from 'react';

import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';

const Alert = (props) => {
  return (
    <ThemeProvider theme={props.theme || {}}>
      <StyledAlert variant={props.variant}>{props.children}</StyledAlert>
    </ThemeProvider>
  );
};

export default Alert;
