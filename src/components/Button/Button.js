import React from 'react';

import { StyledButton } from './Button.styled';
const Button = (props) => {
  return (
    <StyledButton variant='secondary' size='sm' active>
      {props.children}
    </StyledButton>
  );
};

export default Button;
