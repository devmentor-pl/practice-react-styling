import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledButton from './Button.styled';
import themeSettings from './styled/theme';

const Button = ({ variant, size, disabled, active }) => {
    return (
        <ThemeProvider theme={ themeSettings }>
            <StyledButton
                variant={ variant }
                size={ size }
                disabled={ disabled }
                active={ active }
            >
                    Button!
            </StyledButton>
        </ThemeProvider>
    )
};

export default Button;