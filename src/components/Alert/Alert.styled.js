import styled, { css } from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    border: 1px solid transparent;
    border-radius: .25rem;
    ${props => props.theme.variant === 'red' && css`
        background-color: red;
    `};
`

export { StyledAlert };