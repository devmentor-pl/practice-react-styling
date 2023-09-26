import styled, { css, keyframes } from 'styled-components';

const StyledTab = styled.a`
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-color: #dee2e6;
    &&:hover {
        border-color: #dee2e6;
        margin-bottom: -1px;
        transition: border-color 0.3s;
        color: #0056b3;
    }
    ${props =>
        props.disabled &&
        css`
            && {
                pointer-events: none;
                color: grey;
            }
        `}
    ${props =>
        props.isActive &&
        css`
            && {
                border-color: #dee2e6 #dee2e6 #fff;
                color: #495057;
            }
            &&:hover {
                border-bottom-color: transparent;
                color: #495057;
            }
        `}
`;

const loadAnimation = keyframes`
  0% {opacity: 0;  }
  100% {opacity: .1;  }
`;

const StyledTabContent = styled.div`
    display: ${props => (props.isActive ? 'block' : 'none')};
    animation: ${loadAnimation} 0.1s;
`;

export { StyledTab, StyledTabContent };
