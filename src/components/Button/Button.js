import React from 'react';
import StyledButton from './Button.styled'
import {ThemeProvider} from 'styled-components'
import theme from './theme'


const Button = props => {
    const {variant, size, active, disabled} = props;
    return (
        <ThemeProvider theme={theme}>
            <StyledButton variant={variant} size={size} active={active} disabled={disabled} type='button'>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button