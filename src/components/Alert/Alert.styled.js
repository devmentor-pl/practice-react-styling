import styled from 'styled-components';

const StyledAlert = styled.div`
	padding: 15px;
	border-radius: 6px;
	margin-bottom: 10px;
	color: ${props => props.theme.color};
	background-color: ${props => props.theme.backgroundColor};
`;

export { StyledAlert };