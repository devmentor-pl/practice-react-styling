
import styled from 'styled-components';

const DefaultStyledBreadcrumbItem  = styled.li`
    --color-beta: ${props=>props.theme.colorFont};
    list-style: none;
    padding-right:0.5rem;
    a::after {
        display: inline-block;
        padding-left: 0.5rem;
        content: '/';
        color: var(--color-beta);
    }
`

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)(props=> props.style); 

export { StyledBreadcrumbItem}