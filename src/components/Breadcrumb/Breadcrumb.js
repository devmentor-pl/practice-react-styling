import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledBreadcrumb } from './Breadcrumb.styled';
import themeSettings from './theme';

const Breadcrumb = ({ children }) => {
	return (
		<ThemeProvider theme={themeSettings}>
			<nav>
				<StyledBreadcrumb>{children}</StyledBreadcrumb>
			</nav>
		</ThemeProvider>
	);
};

export default Breadcrumb;
