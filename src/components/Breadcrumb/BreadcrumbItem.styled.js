import styled, { css } from 'styled-components'

const StyledBreadcrumbItem = styled.li`
    box-sizing: border-box;
    padding-left: 0.5rem;

    &:nth-child(n+2)::before{
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "/";
    }
`

const BreadcrumbItemLink = styled.a`
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    ${
        ({ active }) => active && css`opacity: 0.7;`
    }
`

export { StyledBreadcrumbItem, BreadcrumbItemLink }
