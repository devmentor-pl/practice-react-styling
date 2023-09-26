import styled from "styled-components";

const StyledBreadcrumb = styled.nav`
  display: block;
`

const OlBreadcrumb = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`

export { StyledBreadcrumb, OlBreadcrumb }