import React from "react";
import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";
import styled from "styled-components";

const StyledBreadcrumbElement = styled.li`
    & + &::before {
        content: '/';
        padding: 8px
    }
    ${props=> props.active && {color:'#6c757d'}}
`

const BreadcrumbItem = ({ href, active, children }) => {
    return (
        <StyledBreadcrumbElement active={active}>
            {href ? <StyledBreadcrumbItem href={href} active={active}>{children}</StyledBreadcrumbItem> : children}
        </StyledBreadcrumbElement>
    )
}

export { BreadcrumbItem }