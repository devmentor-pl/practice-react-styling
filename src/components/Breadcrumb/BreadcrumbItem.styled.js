import styled from 'styled-components';

const DefaultStyledBreadcrumbItem = styled.li`
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
		text-decoration: none;
		background-color: transparent;
	}
`;

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)`
	a {
		color: ${({ theme, active }) => (active ? theme.active.color : '#007bff')};

		&:hover {
			color: ${({ theme, active }) =>
				active ? theme.active.hover.color : theme.hover.color};

			text-decoration: ${({ theme, active }) =>
				active
					? theme.active.hover.textDecoration
					: theme.hover.textDecoration};

			cursor: ${({ active }) => (active ? 'text' : 'pointer')};
		}
	}
`;

export { StyledBreadcrumbItem };
