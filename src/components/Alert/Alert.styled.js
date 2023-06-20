import styled from "styled-components";

const StyledAlert = styled.div`
	display: block;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border-radius: 0.25rem;
	color: ${props => props.variant && props.theme[props.variant].color};
	background-color: ${props =>
		props.variant && props.theme[props.variant].backgroundColor};
	border-color: ${props =>
		props.variant && props.theme[props.variant].borderColor};
`;

export { StyledAlert };
