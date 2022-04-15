import React from 'react';

import {StyledButton} from './Button.styled';

const Button = props => {
    const {variant, size,disabled} = props;
    return (
        <StyledButton variant={variant} size={size} disabled={disabled}>{props.children} </StyledButton>
    )
}

export default Button;