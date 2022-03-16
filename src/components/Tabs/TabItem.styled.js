import styled, { css } from "styled-components";

const disabledStyles = css`
  color: #6c757d;
  background-color: transparent;
  border: transparent;
  cursor: default;
`;

const activeStyles = css`
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
`;

const hoverEffectsToSelect = css`
  border-color: #e9ecef #e9ecef #dee2e6;
  color: #0056b3;
`;

const hoverEffectsNotToSelect = css`
  color: ${(props) => (props.isActive ? "#495057" : "#6c757d")};
`;

const StyledTabItem = styled.a`
  &:not([href]) {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    cursor: pointer;
    margin-bottom: -1px;
    display: block;
    padding: 0.5rem 1rem;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    &:hover {
      ${(props) => !props.disabled && !props.isActive && hoverEffectsToSelect};
      ${(props) =>
        (props.isActive || props.disabled) && hoverEffectsNotToSelect};
    }
    ${(props) => props.disabled && disabledStyles};
    ${(props) => props.isActive && activeStyles};
  }
`;

export { StyledTabItem };
