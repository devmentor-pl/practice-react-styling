import React from 'react';
import { StyledButton } from './Button.styled';

const Button = (props) => {
  const { children, size, variant } = props;
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
