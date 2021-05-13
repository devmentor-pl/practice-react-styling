import React, { useState } from "react";
import { StyledButton, EditedButton } from "./Button.styled";

const Button = (props) => {
  const { variant, size, disable } = props;

  const [active, setActive] = useState(false);
  const [disabled] = useState(disable ? true : false);

  if (variant || size) {
    return (
      <EditedButton
        className={active ? "active" : ""}
        variant={variant}
        size={size}
        onClick={() => setActive(true)}
        disabled={disabled}
      >
        {props.children}
      </EditedButton>
    );
  }
  return (
    <StyledButton
      className={active ? "active" : ""}
      onClick={() => setActive(true)}
      disabled={disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
