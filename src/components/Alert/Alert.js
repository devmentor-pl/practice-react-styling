import React from 'react';
import { StyledAlert } from './Alert.styled';
import { ThemeProvider } from 'styled-components';

const Alert = ({children, variant}) => {
    const theme = variant === 'primary' ? { colorAlfa: '#113f67' } : { colorAlfa: '#a2a8d3' };
    return (
        <ThemeProvider theme={theme}>
              <StyledAlert variant={ variant }>{children}</StyledAlert>
        </ThemeProvider>

    );
}

export default Alert;