import styled, { css } from "styled-components";

const StyledTab = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  &:hover {
    text-decoration: none;
    border-color: #808080;
  }
  ${({ active, disabled }) =>
    !active &&
    !disabled &&
    css`
      /* border-color: transparent; */
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(100, 100, 100);
      pointer-events: none;
      &:hover {
        border-color: transparent;
        text-decoration: none;
      }
    `};
  ${({ active }) =>
    active &&
    css`
      border-color: #d3d3d3 #d3d3d3 white;
      color: rgba(80, 80, 80);
    `}
`;
export default StyledTab;
