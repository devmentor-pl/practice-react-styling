import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import StyledButton from './Button.styled';

export default function Button(props) {
	const { variant, size, disabled, active } = props;

	return (
		<ThemeProvider theme={theme}>
			<StyledButton variant={variant} size={size}>
				{props.children}
			</StyledButton>
		</ThemeProvider>
	);
}
