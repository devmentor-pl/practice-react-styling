import React from 'react';

import { StyledButton } from './Button.styled';
import theme from './themeButton'
import { ThemeProvider } from 'styled-components'




const Button = props => {
    const {variant, size , disabled, active} = props;
  
    return (
      
           <ThemeProvider theme ={theme}>
                <StyledButton variant={variant} size={size} disabled={disabled} active={active} >{props.children} </StyledButton>
           </ThemeProvider>
      
    );
}

export default Button;