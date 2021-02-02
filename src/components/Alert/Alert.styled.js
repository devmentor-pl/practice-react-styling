import styled from "styled-components";

const DefaultStyledAlert = styled.div`
	display: block;
	word-spacing: 2px;
	align-items: center;
	padding: 10px 20px;
	min-height: 50px;
	width: 100%;
	border-radius: 5px;
`;
const StyledAlert = styled(DefaultStyledAlert)`
	background-color: ${({ theme, variant }) => {
		return theme && variant ? theme[variant].bg : "#fff";
	}};
	border: ${({ theme, variant }) => {
		return theme && variant ? `1px solid ${theme[variant].border}` : "#fff";
	}};
`;

export { StyledAlert };
