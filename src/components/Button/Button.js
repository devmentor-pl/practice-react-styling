import React, { useState } from "react";

import { StyledButton, theme } from "./Button.styled";
import { ThemeProvider } from "styled-components";

const Button = ({children, variant, size, disabled, active}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ThemeProvider theme={theme}>
        <StyledButton onClick={() => setIsActive(true)} variant={ variant } size={ size } disabled={ disabled } active={ active }>{children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button;