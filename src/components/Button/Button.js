import React from "react";

import { StyledButton } from "./Button.styled";

const Button = (props) => {
  const { variant, size } = props;
  return (
    <StyledButton variant={variant} size={size}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
