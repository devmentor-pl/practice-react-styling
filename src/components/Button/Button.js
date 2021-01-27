import React from 'react';

import { StyledButton } from './Button.styled';
import theme from './themeButton'
import { ThemeProvider } from 'styled-components'




const Button = props => {
    const {variant, size } = props;
  
    return (
      
           <ThemeProvider theme ={theme}>
                <StyledButton variant={variant} size={size} >{props.children} </StyledButton>
           </ThemeProvider>
      
    );
}

export default Button;