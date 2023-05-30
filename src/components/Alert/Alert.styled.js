import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
	display: block;
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)((props) => props.theme);

export { StyledAlert };
