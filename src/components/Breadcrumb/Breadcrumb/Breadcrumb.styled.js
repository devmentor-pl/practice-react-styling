import styled, { css } from "styled-components";

const StyledBreadcrumb = styled.nav`
  display: block;
`;

const StyledList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  list-style: none;
  background-color: #e9ecef;
`;

export { StyledBreadcrumb, StyledList };
