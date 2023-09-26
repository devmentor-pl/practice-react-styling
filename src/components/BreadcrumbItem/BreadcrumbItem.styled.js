import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.li`
  display: inline-block;

  &::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: #6c757d;
    content: "/";
  }

  &:first-child::before {
    padding-left: 0;
    padding-right: 0.5rem;
    content: "";
  }

  ${props => props.active && css`
    color: #6c757d;
    `
  }
`

export { StyledBreadcrumbItem }