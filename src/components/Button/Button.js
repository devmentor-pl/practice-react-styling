import React from 'react';

import { StyledButton } from './Button.styled';

const Button = ({variant,size,isActive}) => {
    return (
        <StyledButton variant={variant} size={size} isActive={isActive}>Button!</StyledButton>
    )
}

export default Button;