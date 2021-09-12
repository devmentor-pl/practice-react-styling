import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
	display: flex;
	color: #6C757D;
	
	&:not(:last-child)::after {
		display: inline-block;
		content: '/';
		margin: 0 5px;
		color: #6C757D;
	}
`
export default StyledBreadcrumbItem