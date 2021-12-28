import React from 'react';
import {ThemeProvider} from 'styled-components';
import StyledButton from './Button.styled';
import themeSettings from './theme'

const Button = props => {
    const {active, size} = props;
    return (
        <ThemeProvider theme = {themeSettings.variant.primary}>
            <StyledButton active = {active} size={size}>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;