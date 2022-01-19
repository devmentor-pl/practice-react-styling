import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
	display: block;
	color: #004085;
	background-color: #cce5ff;
	border: 1px solid transparent;
	border-color: #b8daff;
	padding: 0.75rem 1.25rem;
	border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)``;

export { StyledAlert };
