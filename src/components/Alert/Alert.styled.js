import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
	display: block;
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
`;

// const StyledAlert = styled(DefaultStyledAlert)`
// 	color: ${({ variant }) => {
// 		if (variant === 'primary') return '#004085';
// 		if (variant === 'secondary') return '#383d41';
// 		return '#383838';
// 	}};
// 	background-color: ${({ variant }) => {
// 		if (variant === 'primary') return '#cce5ff';
// 		if (variant === 'secondary') return '#e2e3e5';
// 		return '#e2e2e2';
// 	}};
// 	border-color: ${({ variant }) => {
// 		if (variant === 'primary') return '#b8daff';
// 		if (variant === 'secondary') return '#d6d8db';
// 		return '#c2c2c2';
// 	}};
// `;
const StyledAlert = styled(DefaultStyledAlert)`
	color: ${({ theme, variant }) => theme.color[variant]?.color};
	background-color: ${({ theme, variant }) =>
		theme.color[variant]?.backgroundColor};
	border-color: ${({ theme, variant }) => theme.color[variant]?.borderColor};
`;





export { StyledAlert };