import React from 'react';
import StyledButton from './Button.styled'

const Button = props => {
    const {variant, size, active, disabled, children} = props
    console.log(active)
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled} children={children}/>
    )
}
export default Button