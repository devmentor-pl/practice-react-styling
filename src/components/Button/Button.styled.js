import styled from 'styled-components';

const StyledButton = styled.button`
    --color-alfa: ${props=>props.theme.backgroundColor};
    --color-beta: ${props=>props.theme.focusColor};
    background-color: var(--color-alfa);
    border: 1px solid var(--color-alfa);
    border-radius: .4em;
    font-size: 1.3rem;
    color: #fff;
    padding: .5rem 0.95rem;
    margin: .3rem;

    &:focus {
        background-color: var(--color-beta);
        border: 1px solid var(--color-beta);
    }

    &:hover {
        background-color: var(--color-beta)
    }

    &:disabled {
        opacity: .3;
        cursor: none
    }
`

export default StyledButton;