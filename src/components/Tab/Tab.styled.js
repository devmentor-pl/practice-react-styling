import { css } from 'styled-components';
import styled from 'styled-components';

const StyledTab = styled.a`
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
  color: #007bff;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  &:not([disabled]):hover {
    border-color: ${(props) =>
      props.eventKey !== props.active && '#e9ecef #e9ecef #dee2e6'};
    text-decoration: none;
    border-bottom: none;
  }
  &:not([disabled]):not(&[aria-selected='true']):hover {
    color: #6c757d;
    text-decoration: none;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
      color: #6c757d;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #6c757d;
      background-color: transparent;
      border-color: transparent;
      cursor: default;
      transition: none;
    `}
`;

export default StyledTab;
