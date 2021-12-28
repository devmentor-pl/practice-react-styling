import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';
import themeSettings from './theme'

const Alert = props => {
    return (
        <ThemeProvider theme = {themeSettings}> 
            <StyledAlert>{props.children}</StyledAlert>
        </ThemeProvider>  
    );
}

export default Alert;