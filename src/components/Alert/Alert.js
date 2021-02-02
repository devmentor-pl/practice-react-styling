import React from "react";
import { ThemeProvider } from "styled-components";
import themeSettings from "./Alert.theme";

import { StyledAlert } from "./Alert.styled";

const Alert = ({ children, variant }) => {
	return (
		<ThemeProvider theme={themeSettings}>
			<StyledAlert variant={variant}>{children}</StyledAlert>
		</ThemeProvider>
	);
};

export default Alert;
