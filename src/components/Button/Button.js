import React from 'react';
import StyledButton from './Button.styled'

const Button = props => {
    const {variant} = props
    return (
        <StyledButton variant={variant}>Button</StyledButton>
    )
}
export default Button