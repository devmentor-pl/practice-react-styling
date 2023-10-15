import styled from 'styled-components';

const StyledNav = styled.nav``;
const StyledBreadCrumb = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;
	list-style: none;
	background-color: #e9ecef;
	border-radius: 0.25rem;
`;
const StyledItem = styled.li`
	color: #6c757d;
	&:not(:last-child):after {
		content: '/';
		display: inline-block;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
`;

const StyledLink = styled.a`
	color: ${props => (props.active ? '#6c757d' : '#007bff')};
`;
export { StyledNav, StyledBreadCrumb, StyledItem, StyledLink };
