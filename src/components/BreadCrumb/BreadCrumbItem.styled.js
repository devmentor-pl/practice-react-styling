import styled from "styled-components";

const StyledBreadCrumbItem = styled.li`
	padding-left: 0.6rem;
	a {
		color: ${props => (props.active ? "#6c757d" : `#007bff`)};
		background-color: transparent;
	}
	& + &::before {
		color: #6c757d;
		display: inline-block;
		padding-right: 0.5rem;
		content: "/";
	}
`;

export { StyledBreadCrumbItem };
