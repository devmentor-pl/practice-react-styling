import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';

const themeSettings = {
    primary: {
    color: '#084298',
    backgroundColor: '#cfe2ff',
    borderColor: '#b6d4fe'
    },
    secondary: {
    color: '#0f5132',
    backgroundColor: '#d1e7dd',
    borderColor: '#badbcc'
    },
}


const Alert = props => {
    const {variant} = props
    return (
        <ThemeProvider theme={themeSettings}>
            <StyledAlert variant={variant}>{props.children}</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;