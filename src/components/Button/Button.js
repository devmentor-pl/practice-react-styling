import React from 'react'

import { StyledButton } from './Button.styled'
import { ThemeProvider } from 'styled-components'

const themeSettings = {
	colorAlfa: 'royalblue',
	padding: '1rem 2rem',
	fontSize: '1.5rem',
}

const Button = props => {
	return (
		<ThemeProvider theme={themeSettings}>
			<StyledButton variant="primary" size="xl" disabled={false}>
				{props.children}
			</StyledButton>
		</ThemeProvider>
	)
}

export default Button
