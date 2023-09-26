import React from "react";
import { StyledButton } from './Button.styled'

const Button = ({variant, size, children, disabled}) => {
    return <StyledButton disabled={disabled} variant={variant} size={size}>{children}</StyledButton>
}

export default Button