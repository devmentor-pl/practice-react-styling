import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledButton from './Button.styled';
import themeSettings from './buttonTheme';

const Button = props => {
    const {variant, size, active} = props;

    return (
        <ThemeProvider theme={themeSettings.variant.secondary}>
            <StyledButton variant={variant} size={size} active={active}>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;