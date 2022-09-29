import React from "react";

import { StyledButton } from "./Button.styled";
import themeSettingsButton from "../../../02/themeSettingsButton";
import { ThemeProvider } from "styled-components";

const Button = (props) => {
  const { variant, size, disabled, active } = props;
  return (
    <ThemeProvider theme={themeSettingsButton}>
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled}
        active={disabled ? false : true}
      >
        {props.children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
