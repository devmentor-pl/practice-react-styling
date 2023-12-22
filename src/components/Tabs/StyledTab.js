import styled, { css } from "styled-components";

const StyledTab = styled.li`
  a {
    padding: 0.5rem 0.8rem;
    border: 1px solid transparent;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    margin-bottom: -1px;
    display: block;
    transition: 0.1 ease;
   
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
        pointer-events: none;
        color: #74797d;
        background-color: transparent;
        border-color: transparent;
      `}
    &:hover {
      border-color: ${({ eventKey, activeTab }) =>
        eventKey !== activeTab && "#e9ecef"};
      text-decoration: none;
    }
  }
`;

export default StyledTab;

