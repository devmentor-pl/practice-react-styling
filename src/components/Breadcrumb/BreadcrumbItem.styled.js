import styled, { css } from "styled-components";

const DefaultStyledBreadcrumbItem = styled.li`
  display: list-item;
  color: #000000;
  &:before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
    content: "/";
  }
`;

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)`
  ${(props) => {
    const { href, active } = props;
    if (href !== undefined) {
      const hrefStyled = {
        color: "#007bff",
      };
      return hrefStyled;
    }
    if (active === true) {
      const activeStyled = {
        color: "#6c757d",
      };
      return activeStyled;
    }
  }}
`;

export { StyledBreadcrumbItem };
