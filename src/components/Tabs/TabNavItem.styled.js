import styled, { css } from "styled-components";

const TabNavItemStyled = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  display: block;
  padding: 0.5rem 1rem;

  ${props =>
    props.active &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6;
      border-bottom-color: #fff;
    `};

  &:hover {
    border-color: #e9ecef;
    border-bottom-color: #dee2e6;
    text-decoration: none;

    ${props =>
      props.active &&
      css`
        color: inherit;
        border-color: #dee2e6;
        border-bottom-color: #fff;
      `};
  }

  ${props =>
    props.disabled &&
    css`
      color: #6c757d;
      background-color: transparent;
      border-color: transparent;
      pointer-events: none;
      cursor: default;
    `};
`;

export { TabNavItemStyled };
