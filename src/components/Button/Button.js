import React from 'react';
import {ThemeProvider} from 'styled-components';
import StyledButton from './Button.styled';
import themeSettings from './theme'

const Button = props => {
    return (
        <ThemeProvider theme = {themeSettings.variant.primary}>
            <StyledButton active = {false} size="lg">{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;