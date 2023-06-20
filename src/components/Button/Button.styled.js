import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${props =>
		props.variant && props.theme[props.variant].bgColor};
	border-radius: ${props => props.size && props.theme[props.size].borderRadius};
	border: transparent;
	color: white;
	font-size: ${props => props.size && props.theme[props.size].fontSize};
	padding: ${props =>
		props.size &&
		`${props.theme[props.size].paddingVertical} ${
			props.theme[props.size].paddingHorizontal
		}`};

	&:disabled {
		opacity: 0.65;
	}
	&:focus {
		background-color: ${props =>
			props.variant && props.theme[props.variant].focus.bgColor};
		box-shadow: ${props =>
			props.variant && props.theme[props.variant].focus.boxShadow};
		border: transparent;
	}
	&:hover {
		background-color: ${props =>
			props.variant && props.theme[props.variant].hoverColor};
	}
`;

export { StyledButton };
