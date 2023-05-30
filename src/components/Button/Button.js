import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

import { StyledButton } from './Button.styled';

const Button = (props) => {
	const { variant, size, active, disabled } = props;

	return (
		<ThemeProvider
			theme={{ ...themeSettings[variant], ...themeSettings[size] }}>
			<StyledButton
				active={active}
				disabled={disabled}>
				{props.children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
