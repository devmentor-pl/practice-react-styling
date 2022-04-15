import React from "react";

import { StyledAlert, alertTheme, successTheme } from "./Alert.styled";
import { ThemeProvider } from "styled-components";

const Alert = (props) => {
    return (
        <ThemeProvider theme={successTheme}>
            <StyledAlert>{props.children}</StyledAlert>
        </ThemeProvider>
    );
};

export default Alert;
