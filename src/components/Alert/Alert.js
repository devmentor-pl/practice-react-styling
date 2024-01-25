import React from 'react';

import { StyledAlert } from './Alert.styled'
import { ThemeProvider } from 'styled-components'

const themeSettings = {
	colorAlfa: 'royalblue',
}

const Alert = props => {
	return (
		<ThemeProvider theme={themeSettings}>
			<StyledAlert variant="primary">{props.children}</StyledAlert>
		</ThemeProvider>
	)
}

export default Alert;