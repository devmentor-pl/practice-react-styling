import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.li`
  display: list-item;
`;

const StyledBreadcrumbItemLink = styled.a`
  padding-right: 0.5rem;
  color: #0076ff;

  &:before {
    ${(props) =>
      props.first
        ? null
        : `content: "/"; 
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;`}
  }
  &:active {
    ${(props) => (props.last ? "#6c757d" : "#0076ff")}
  }
`;

export { StyledBreadcrumbItem, StyledBreadcrumbItemLink };

// color: ${(props) => (props.type === "active" ? "#6c757d" : null)};
