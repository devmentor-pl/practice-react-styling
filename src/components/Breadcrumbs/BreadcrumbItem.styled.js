import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
	& + &::before {
		content: '/';
		padding: 8px;
	}
`;

const StyledLink = styled.a`
	color: #007bff;
	text-decoration: none;

	&:hover {
		color: #0056b3;
		text-decoration: underline;
	}

	&.active {
		color: #6c757d;
		pointer-events: none;
		cursor: default;
		text-decoration: none;
	}
`;

export { StyledBreadcrumbItem, StyledLink };
