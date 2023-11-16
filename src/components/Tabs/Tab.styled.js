import styled from 'styled-components';

const DefaultStyledTab = styled.a`
	display: block;
	padding: 0.5rem 1rem;
	margin-bottom: -1px;
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	text-decoration: none;
	background-color: transparent;

	&:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
		text-decoration: none;
	}
`;

const StyledTab = styled(DefaultStyledTab)`
	${({ theme, disabled }) => disabled && theme.tab.disabled}
	${({ theme, isActive }) => isActive && theme.tab.isActive}
`;

export { StyledTab };
