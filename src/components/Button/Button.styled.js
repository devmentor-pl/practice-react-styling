//buton.styled.js
import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	border-radius: 5px;
	color: #ffff;
	border: 2px solid transparent;
	background-color: ${props => props.theme.backgroundColor};
	padding: ${props => (props.size === 'lg' ? size.lg : size.sm)};
	font-size: ${props => (props.size === 'lg' ? '20px' : '14px')};

	&:hover {
		background-color: blue;
	}

	&:active,
	&[aria-pressed='true'] {
		background-color: ${props => props.theme.activeBgc};
	}

	&:focus {
		outline: 3px solid ${props => props.theme.borderColor};
	}

	button:disabled,
	button[disabled] {
		border: 1px solid black;
		background-color: red;
		color: blue;
	}
`;

StyledButton.defaultProps = {
	theme: {
		backgroundColor: 'black',
		borderColor: 'transparent',
		activeBgc: 'transparent',
	},
};

const variant = {
	primary: {
		backgroundColor: '#007BFF',
		borderColor: '#6EA8FE',
		activeBgc: '#0062CC',
	},
	secondary: {
		backgroundColor: '#6C757D',
		borderColor: '#DEE2E6',
		activeBgc: '#545B62',
	},
};
const size = {
	lg: '8px 16px',
	sm: '4px 8px',
};

export { StyledButton, variant };
