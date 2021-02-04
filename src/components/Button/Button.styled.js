import styled from "styled-components";
import { css } from "styled-components";

const DefaultStyledButton = styled.button`
	display: inline-block;
	border-radius: 5px;
	padding: 5px 15px;
	border: none;
	background-color: yellow;
	color: white;
	coursor: pointer;
	font-size: 1.4em;
`;

const StyledButton = styled(DefaultStyledButton)`
	background-color: ${({ theme, variant }) => theme[variant].bgColor};
	border: ${({ theme, variant }) => `1px solid ${theme[variant].borderColor}`};
	&:hover {
		background-color: ${({ theme, variant }) => theme[variant].borderColor};
	}
	&:focus {
		outline: 0;
		box-shadow: 0 0 3pt 2pt ${({ theme, variant }) => theme[variant].bgColor};
	}
	${({ size }) =>
		size &&
		css`
			font-size: ${({ theme }) => theme[size].fontSize};
			padding: ${({ theme }) => theme[size].padding};
		`};
	${({ active }) =>
		active &&
		css`
			background-color: ${({ theme, variant }) => theme[variant].borderColor};
		`};
	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
			pointer-events: none;
			background-color: lavender;
			border: none;
		`};
`;

export { StyledButton };
