import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ variant, theme }) =>
		variant && theme.button[variant].bgColor};
	border-radius: ${({ size, theme }) =>
		size && theme.button[size].borderRadius};
	border: transparent;
	color: white;
	font-size: ${({ size, theme }) => size && theme.button[size].fontSize};
	padding: ${({ size, theme }) =>
		size &&
		`${theme.button[size].paddingVertical} ${theme.button[size].paddingHorizontal}`};

	&:disabled {
		opacity: 0.65;
	}
	&:focus {
		background-color: ${({ variant, theme }) =>
			variant && theme.button[variant].focus.bgColor};
		box-shadow: ${({ variant, theme }) =>
			variant && theme.button[variant].focus.boxShadow};
		border: transparent;
	}
	&:hover {
		background-color: ${({ variant, theme }) =>
			variant && theme.button[variant].hoverColor};
	}
`;

export { StyledButton };
