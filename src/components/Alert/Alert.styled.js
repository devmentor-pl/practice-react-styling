import styled from 'styled-components';

const StyledAlert = styled.div`
    --color-alfa: ${props => props.theme.colorAlfa};
    --color-beta: ${props => props.theme.colorBeta};
    --color-gamma: ${props => props.theme.colorGamma};
    display: block;
    background-color: var(--color-alfa);
    border: 1px solid var(--color-beta);
    border-radius: .4em;
    color: var(--color-gamma);
    text-align: center;
    padding: .75em 1.25em;
    margin-bottom: 1rem;
`

export {StyledAlert};