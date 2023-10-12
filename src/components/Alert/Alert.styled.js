import styled from 'styled-components';

const StyledAlert = styled.div`
	padding: 12px 20px;
	border-radius: 4px;
	margin: 0 0 16px;
	border: 1px solid transparent;
	color: ${props => props.theme.color};
	background-color: ${props => props.theme.backgroundColor};
`;

StyledAlert.defaultProps = {
	theme: {
		color: 'black',
		backgroundColor: 'aquamarine',
	},
};

const themeSettings = {
	primary: {
		color: '#004085',
		backgroundColor: '#CCE5FF',
	},
	secondary: {
		color: '#383D41',
		backgroundColor: '#E2E3E5',
	},
};

export { StyledAlert, themeSettings };