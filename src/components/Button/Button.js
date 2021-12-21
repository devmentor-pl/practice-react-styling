import React from 'react';
import {ThemeProvider} from 'styled-components';
import StyledButton from './Button.styled';
import themeSettings from './theme'

const Button = props => {
    return (
        <ThemeProvider theme = {themeSettings}>
            <StyledButton active ={false}>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;