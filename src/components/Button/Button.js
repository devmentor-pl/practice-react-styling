import React from 'react';
import { StyledButton } from './Button.styled';

const Button = props => {
    const {variant, size, active, disabled} = props;
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled}>{props.children}</StyledButton>
    );
}

export default Button;