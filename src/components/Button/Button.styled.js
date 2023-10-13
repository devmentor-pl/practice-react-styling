//buton.styled.js
import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 5px;
	color: ${props => props.theme.color};
	background-color: ${props => props.theme.background};
	border: 1px solid ${props => props.theme.mainBorderColor};

	/* DEFAULT SIZE */
	padding: 6px 12px;
	font-size: 16px;
	/* SM */
	padding: ${props => (props.size === 'sm' ? size.sm : null)};
	font-size: ${props => (props.size === 'sm' ? '14px' : null)};
	/* LG */
	padding: ${props => (props.size === 'lg' ? size.lg : null)};
	font-size: ${props => (props.size === 'lg' ? '20px' : null)};

	&.active {
		background-color: ${props => props.theme.activeBackground};
		&:hover {
			background-color: ${props => props.theme.activeBackground};
		}
	}

	&:hover {
		background-color: ${props => props.theme.hoverColor};
	}

	&:focus {
		outline: 3px solid ${props => props.theme.focusOutlineColor};
	}

	:disabled {
		background-color: ${props => props.theme.disabled};
		cursor: pointer;
	}
`;

StyledButton.defaultProps = {
	theme: {
		color: '#000',
		background: '#fff',
		activeBackground: 'grey',
		mainBorderColor: '#000',
		hoverColor: '#808080',
		focusOutlineColor: 'black',
		disabled: 'grey',
	},
};

const variant = {
	primary: {
		color: '#ffff',
		background: '#007BFF',
		activeBackground: '#0062cc',
		mainBorderColor: 'transparent',
		hoverColor: '#0069d9',
		focusOutlineColor: '#92C7FF',
		disabled: '#59A9FF',
	},
	secondary: {
		color: '#ffff',
		background: '#6C757D',
		activeBackground: '#545B62',
		mainBorderColor: 'transparent',
		hoverColor: '#5A6268',
		focusOutlineColor: '#C0C4C8',
		disabled: '#9FA5AA',
	},
};

const size = {
	lg: '8px 16px',
	sm: '4px 8px',
};

export { StyledButton, variant };