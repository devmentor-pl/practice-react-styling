import React from "react";

import { StyledButton } from "./Button.styled";

const Button = (props) => {
  const { variant, size, disabled, active } = props;
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      active={active}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
