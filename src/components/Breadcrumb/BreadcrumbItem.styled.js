import styled from 'styled-components';

const StyledBreadcrumItem = styled.li`
	&:not(:last-child) {
		&::after {
			display: inline-block;
			padding: 0 0.5rem;
			color: #5c757d;
			content: '/';
		}
	}
	${(props) =>
		props.active &&
		`
        color: #6c757d;
    `}
`;

export default StyledBreadcrumItem;
