import styled, { css } from "styled-components";

const DefaultStyledBreadcrumbItem = styled.li`
  &:not(:first-child) {
    &::before {
      display: inline-block;
      padding: 0 0.5rem;
      color: #6c757d;
      content: "/";
    }
  }

  ${(props) =>
    props.active &&
    `
        color: #6c757d;
        // padding-left: .5rem;
    `}
`;

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)(
  (props) => props.style
);

export { StyledBreadcrumbItem };
