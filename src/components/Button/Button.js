import React from "react";

import { StyledButton } from "./Button.styled";
import { ThemeProvider } from "styled-components";

const themeSettings = {
    variant: {
        primary: "#007BFE",
        secondary: "yellow",
    },
    size: {
        small: "50px",
        medium: "80px",
        big: "100px",
    },
};

const Button = (props) => {
    return (
        <ThemeProvider theme={themeSettings}>
            <StyledButton
                active={false}
                variant={themeSettings.variant.primary}
                size={themeSettings.size.medium}
            >
                {props.children}
            </StyledButton>
        </ThemeProvider>
    );
};

export default Button;
