import styled, {css} from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: ${props=>props.theme.defaultAlertBg};

    ${props =>props.type ==='info' && css`
        border-color: #b8daff;
        color: #004085;
        background-color: #cce5ff;
    `};

    ${props =>props.type ==='error' && css`
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    `};
`

export { StyledAlert };