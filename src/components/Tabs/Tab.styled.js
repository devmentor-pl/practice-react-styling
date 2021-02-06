import styled, { css } from 'styled-components';

const StyledTab = styled.li`
    position: relative;
    top: 1px;
    color: #007bff;

    padding: .5rem 1rem;
    text-decoration: none;
    box-sizing: border-box;
    cursor: grab;

    ${props => props.selected && css`
        color: #495057;
        border: 1px solid transparent;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
        border-color: #dee2e6 #dee2e6 #fff;
    `};
    
    ${props => props.disabled && css`
        color: #6c757d;
        cursor: default;
    `};
`

export { StyledTab };