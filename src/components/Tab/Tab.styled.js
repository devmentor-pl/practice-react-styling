import styled, { css } from "styled-components"

const StyledTab = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  display: block;
  padding: 0.5rem 1rem;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'null'};

  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    text-decoration: none;
  }

  ${props => props.isActive && css`
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;

    &:hover {
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    }
  `}

  ${props => props.disabled && css`
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  `}
`

export { StyledTab }