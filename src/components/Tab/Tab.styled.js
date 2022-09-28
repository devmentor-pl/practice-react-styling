import styled, { css } from 'styled-components'

const StyledTab = styled.a`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
  background-color: transparent;
  color: #007bff;

  ${({ eventKey, actualKey, disabled }) =>
    eventKey !== actualKey &&
    !disabled &&
    css`
      &:hover {
        color: #003f82;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #dee2e6 #dee2e6;
        cursor: pointer;
      }
    `}

  ${({ eventKey, actualKey }) =>
    eventKey === actualKey &&
    css`
      color: black !important;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    `}

    &:not([href]) {
    color: #007bff;
  }

  &:not([href]):hover {
    color: #024a96;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: black !important;
      opacity: 0.6;
    `}
`

export { StyledTab }
