import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

import { StyledAlert } from './Alert.styled';

const Alert = ({variant, children}) => {
	return (
		<ThemeProvider theme={themeSettings}>
			<StyledAlert variant={variant}>{children}</StyledAlert>
		</ThemeProvider>
	);
};

export default Alert;
