import React from 'react';

import { StyledButton } from './Button.styled';

import { ThemeProvider } from 'styled-components';

const Button = props => {
    const {variant, size, active, disabled} = props

    return (
        <ThemeProvider theme={ {variant, size, active, disabled} }>
            <StyledButton>
                { props.children }
            </StyledButton>
        </ThemeProvider>
    );
}

export default Button;