import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

import { StyledButton } from './Button.styled';

const Button = ({content,variant,size,isActive}) => {
    return (
        <ThemeProvider theme={themeSettings}>
            <StyledButton variant={variant} size={size} isActive={isActive}>{content}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;