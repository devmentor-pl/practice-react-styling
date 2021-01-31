import React from 'react';

import { StyledAlert } from './Alert.styled';

import { ThemeProvider } from 'styled-components';

const Alert = props => {
    const {variant} = props
    return (
        <ThemeProvider theme={ {variant} }>
            <StyledAlert>
                { props.children }
            </StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;