import React from "react";
import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";
import styled from "styled-components";

const StyledBreadcrumbElement = styled.li`
    &::before {
        content: '/';
        padding: 8px
    }
`

const BreadcrumbItem = ({ href, active, children }) => {
    return (
        <StyledBreadcrumbElement>
            <StyledBreadcrumbItem href={href} active={active}>{children}</StyledBreadcrumbItem>
        </StyledBreadcrumbElement>
    )
}

export { BreadcrumbItem }