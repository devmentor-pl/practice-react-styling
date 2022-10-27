import styled, {css} from 'styled-components';

const TabItem = styled.a`
  background-color: transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border: 1px solid transparent;
  color: #007bff;
  display: block;
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    text-decoration: none;
  }
  
  ${(props) =>
    props.active &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
      &:hover {
        color: #495057;
        border-color: #dee2e6 #dee2e6 #fff;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: #6c757d;
      cursor: default;
      pointer-events: none;
      &:hover {
        border-color: transparent;
        color: #6c757d;
      }
    `}
`;

export default TabItem; 