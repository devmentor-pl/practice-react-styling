import styled, { css } from "styled-components";

const StyledAlert = styled.div`
	display: block;
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	/* ${props => props.theme}; */
	color: ${props => props.theme[props.variant].color};
	background-color: ${props => props.theme[props.variant].backgroundColor};
	border-color: ${props => props.theme[props.variant].borderColor};
`;

export { StyledAlert };
