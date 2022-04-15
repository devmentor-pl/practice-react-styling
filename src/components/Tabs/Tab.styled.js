import styled, { css } from 'styled-components';

const StyledTab = styled.a`
    position: relative;
    top: 1px;
    color: #007bff;
    padding: .5rem 1rem;
    text-decoration: none;
    box-sizing: border-box;

    ${props =>
        props.active &&
        css`
          color: #495057;
          background-color: #fff;
          border-color: #dee2e6;
          border-bottom-color: #fff;
        `};

        &:hover {
            border-color: #e9ecef;
            border-bottom-color: #dee2e6;
            text-decoration: none;
            ${props =>
              props.active &&
              css`
                color: inherit;
                border-color: #dee2e6;
                border-bottom-color: #fff;
              `};
          }
  
          ${props =>
            props.disabled &&
            css`
              color: #6c757d;
              background-color: transparent;
              border-color: transparent;
              pointer-events: none;
              cursor: default;
            `};
        `;

export { StyledTab };