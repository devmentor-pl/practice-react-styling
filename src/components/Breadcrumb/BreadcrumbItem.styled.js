import styled, { css } from 'styled-components'

const StyledBreadcrumbItem = styled.li`
	a {
		color: #007bff;
		text-decoration: none;
		background-color: transparent;

		&:hover {
			text-decoration: underline;
		}

		&.active {
			cursor: default;
			color: #6c757d;
			text-decoration: none;
		}
	}
	span {
		margin: 0 0.5rem;
		content: '⛅ ';
	}
`

export { StyledBreadcrumbItem }
