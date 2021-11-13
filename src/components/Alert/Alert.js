import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert } from './Alert.styled';
import themeSettings from './styled/theme';

const Alert = ({ variant, children }) => {
    return (
        <ThemeProvider theme={ themeSettings }>
            <StyledAlert variant={ variant }>{ children }</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;