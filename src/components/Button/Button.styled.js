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
	${({ size = {} }) =>
		size &&
		css`
			font-size: ${({ theme }) => theme[size].fontSize};
			padding: ${({ theme }) => theme[size].padding};
		`}

	&:hover {
		background-color: ${({ theme, variant }) => theme[variant].borderColor};
	}
`;

export { StyledButton };
