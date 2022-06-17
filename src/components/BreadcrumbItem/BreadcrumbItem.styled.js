import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.a`
  margin: 10px;
  ${(props) =>
    props.active &&
    css`
      color: grey;
    `};
`;

export { StyledBreadcrumbItem };
