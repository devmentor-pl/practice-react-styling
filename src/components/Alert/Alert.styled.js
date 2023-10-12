import styled from 'styled-components';

const StyledAlert = styled.div`
	display: block;
	color: ${props => props.theme.color};
	padding:15px;
	border-radius: 6px;
	background-color: ${props => props.theme.backgroundColor};
`;

export { StyledAlert };