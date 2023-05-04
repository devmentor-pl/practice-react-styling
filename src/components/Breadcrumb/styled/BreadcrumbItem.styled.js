import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  color: ${({ active }) => active && "#6c757d"};
  padding-left: 0.5rem;
  :not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;

StyledBreadcrumbItem.displayName = "StyledBreadcrumbItem";

export default StyledBreadcrumbItem;
