import { css } from "styled-components";
import styled from "styled-components";

const StyledTab = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  display: block;
  padding: 0.5rem 1rem;
  ${(props) =>
    props.active &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    `};
  ${(props) =>
    props.disabled &&
    css`
      color: #6c757d;
      border-color: transparent;
      pointer-events: none;
      cursor: default;
    `};
`;
export default StyledTab;
