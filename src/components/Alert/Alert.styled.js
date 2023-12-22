import styled from "styled-components";

const StyledAlert = styled.div`
	display: block;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border-radius: 0.25rem;
	color: ${({ variant, theme }) => variant && theme.alert[variant].color};
	background-color: ${({ variant, theme }) =>
		variant && theme.alert[variant].backgroundColor};
	border-color: ${({ variant, theme }) =>
		variant && theme.alert[variant].borderColor};
`;

export { StyledAlert };
