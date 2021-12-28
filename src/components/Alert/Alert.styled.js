import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    --color-alfa: ${props=>props.theme.colorBackground};
    --color-beta: ${props=>props.theme.colorBorder};
    --color-gamma: ${props=>props.theme.colorFonts};
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-beta);
    border-radius: 0.25rem;
    background-color: var(--color-alfa);
    color: var(--color-gamma);
`

const StyledAlert = styled(DefaultStyledAlert)(props=> props.style); 

export { StyledAlert }; 