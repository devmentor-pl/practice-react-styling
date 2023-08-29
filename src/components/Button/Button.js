import React from 'react';

import { StyledButton } from './Button.styled';

function Button({ variant, value, size, active, disabled }) {
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled}>
            {value}
        </StyledButton>
    );
}

export default Button;
