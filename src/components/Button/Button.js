import React from 'react';

import { ThemeProvider } from 'styled-components';
import { StyledButton } from './Button.styled';

const Button = (props) => {
  return (
    <ThemeProvider theme={props.theme || {}}>
      <StyledButton>{props.children}</StyledButton>
    </ThemeProvider>
  );
};

export default Button;
