import React from 'react';

import { StyledAlert } from './Alert.styled';
import { ThemeProvider } from 'styled-components'
import theme from './themeAlert'


const Alert = props => {
  
    return (
      <ThemeProvider theme={theme}>
          
          <StyledAlert variant = "primary" >{props.children}</StyledAlert>
      </ThemeProvider>
      
    );
}

export default Alert;