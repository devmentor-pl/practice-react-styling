import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';
import {theme} from '../theme'

const Alert = (props) => {
    const {variant = "default"} = props
    return (
        <ThemeProvider theme={theme[variant]}>
            <StyledAlert>{props.children}</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;