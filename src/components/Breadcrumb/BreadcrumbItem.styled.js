import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
    display: inline;
    margin-right: 0.5rem; 

    & + &::before {
        content: "/"; 
        padding-right: 0.5rem;
    }

    & a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            color: #0056b3;
            text-decoration: underline;
        }
    }

    &.active {
        color: #6c757d;
        pointer-events: none;
    }
`;

export { StyledBreadcrumbItem };