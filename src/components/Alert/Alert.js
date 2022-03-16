import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import { StyledAlert } from './Alert.styled';

const Alert = (props) => {
	const { variant } = props;

	return (
		<ThemeProvider theme={theme}>
			<StyledAlert variant={variant}>{props.children}</StyledAlert>
		</ThemeProvider>
	);
};

export default Alert;
