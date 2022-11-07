import styled from "styled-components";

const StyledBreadcrumItem = styled.li`
  padding-left: 0.5rem;
  :not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
  color: ${({ theme }) => theme.activeColor};
`;
export default StyledBreadcrumItem;
