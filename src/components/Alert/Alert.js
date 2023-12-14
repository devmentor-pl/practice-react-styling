import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './alertTheme';
import { StyledAlert } from './Alert.styled';

const Alert = props => {
    return (
        <ThemeProvider theme={themeSettings}>
            <StyledAlert>{props.children}</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;