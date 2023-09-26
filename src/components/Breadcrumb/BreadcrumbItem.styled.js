import styled, { css } from "styled-components";

const StyledBreadcrumbItem = styled.a.attrs(({ href }) => ({
    href: `${href}`
}))`
    color: #007bff;
    &:hover {
        color: #0056b3; 
    }
`

export { StyledBreadcrumbItem }