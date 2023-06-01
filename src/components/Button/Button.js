import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

import { StyledButton } from './Button.styled';

const Button = (props) => {
	const { variant = 'primary', size, active, disabled, children } = props;

	return (
		<ThemeProvider theme={themeSettings}>
			<StyledButton
				variant={variant}
				size={size}
				active={active}
				disabled={disabled}>
				{children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
