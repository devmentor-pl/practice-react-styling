import styled, { css } from "styled-components";

const StyledTabItem = styled.li`
  a {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;
    transition: 0.125s ease-in-out;
    ${({ eventKey, activeTab }) =>
      eventKey === activeTab &&
      css`
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
      `}
    ${({ disabled }) =>
      disabled &&
      css`
        color: #6c757d;
        cursor: default;
        background-color: transparent;
        border-color: transparent;
        pointer-events: none;
      `}
    &:hover {
      border-color: ${({ eventKey, activeTab }) =>
        eventKey !== activeTab && "#e9ecef #e9ecef #dee2e6"};
      text-decoration: none;
    }
  }
`;

export default StyledTabItem;
