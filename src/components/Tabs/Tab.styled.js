import styled, { css } from "styled-components";

const DefaultStyledTab = styled.a`
  display: block;
  margin-bottom: -1px;
  border: 1px solid transparent;
  color: #007bff;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  text-decoration: none;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  &:hover {
    border-color: ${(props) =>
      props.active ? "#dee2e6 #dee2e6 #fff #dee2e6" : "#dee2e6"};
    text-decoration: none;
  }

  ${(props) =>
    props.active &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff #dee2e6;
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: #6c757d;
      border-color: transparent;
      pointer-events: none;
      cursor: default;
    `};
`;

export default DefaultStyledTab;
