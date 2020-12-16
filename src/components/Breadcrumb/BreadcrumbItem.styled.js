import styled from "styled-components";

const BreadcrumbItemStyled = styled.li`
  ${props =>
    props.active &&
    `
        color: #6c757d;
    `}

  & + & {
    padding-left: 0.5rem;
  }

  & + &::before {
    content: "/";
    color: #6c757d;
    display: inline-block;
    padding-right: 0.5rem;
  }
`;

export { BreadcrumbItemStyled };
