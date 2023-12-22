import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
	padding-left: 0.6rem;
	color: ${props => (props.active ? "#6c757d" : "#007bff")};
	a {
		text-decoration: none;
		background-color: transparent;
	}

	& + &::before {
		display: inline-block;
		padding-right: 0.5rem;
		color: #6c757d;
		content: "/";
	}
`;

export { StyledBreadcrumbItem };
