import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.a.attrs(({ href }) => ({
    href: `${href}`
}))`
${props => props.active && css`
    color: grey;
    cursor: auto;
    &:hover {
        color:grey;
        text-decoration: none ;
    }
`
    }
`

export { StyledBreadcrumbItem }