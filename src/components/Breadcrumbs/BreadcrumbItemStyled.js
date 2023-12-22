import styled, {css} from "styled-components";

const BreadcrumbItemStyled = styled.a.attrs(({href}) => ({
    href: href,
}))`
    padding: 0.5rem;
    margin-left: 0.3rem;
    display: inline-flex;
`

export default BreadcrumbItemStyled;