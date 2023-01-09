import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';

const theme = {
    default: {
        color: 'red',
        backgroundColor: 'white',
        borderColor: 'red',
    },
    primary: {
        color: '#004085',
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff',
    },
    secondary: {
        color: '#383d41',
        backgroundColor: '#e2e3e5',
        borderColor: '#d6d8db'
    }
}


const Alert = (props) => {
    const {variant = "default"} = props
    return (
        <ThemeProvider theme={theme[variant]}>
            <StyledAlert>{props.children}</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;