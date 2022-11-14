import React from "react";

import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      active={props.active}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
