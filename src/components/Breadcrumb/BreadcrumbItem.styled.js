import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
	display: list-item;
	text-align: -webkit-match-parent;
	
	&:not(:first-child):before {
		display: inline-block;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		color: #6c757d;
		content: '/';
	}

	a {
		color: ${({ active }) => (active ? '#6c757d' : '#007bff')};
		text-decoration: none;
		background-color: transparent;

		&:hover {
            color: ${({ active }) => (active ? '#6c757d' : '#0056b3')};
			text-decoration: ${({active}) => active ? null : 'underline'};
		}
	}
`;

export { StyledBreadcrumbItem };
