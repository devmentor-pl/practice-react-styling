import styled from 'styled-components';

const DefaultStyledBreadcrumb  = styled.ul`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorFont};
    display: flex;
    margin-bottom: 1rem;
    padding: .75rem 1rem;
    border-radius: 0.3rem;
    background-color: var(--color-alfa);
    color: var(--color-beta);
    list-style: none;
`

const StyledBreadcrumb = styled(DefaultStyledBreadcrumb)(props=> props.style); 

export { StyledBreadcrumb}