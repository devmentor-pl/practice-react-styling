import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

import { StyledAlert } from './Alert.styled';

const Alert = (props) => {
	return (
		<ThemeProvider theme={themeSettings[props.variant]}>
			<StyledAlert>{props.children}</StyledAlert>
		</ThemeProvider>
	);
};

export default Alert;
