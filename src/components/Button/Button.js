import React from "react";
import { StyledButton } from "./Button.styled";
import { ThemeProvider } from "styled-components";
import btnTheme from "./Button.theme";

const Button = ({ variant, size, active, disabled, children }) => {
	return (
		<ThemeProvider theme={btnTheme}>
			<StyledButton
				type="button"
				variant={variant}
				size={size}
				active={active}
				disabled={disabled}
			>
				{children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
