import React from "react";
import { StyledLink, StyledItem } from "./Breadcrumb.styled";

const BreadcrumbItem = props => {
    const {href = null, active = false} = props;
    return(
        <StyledItem>
            <StyledLink isActive={active} href={href}>{props.children}</StyledLink>
        </StyledItem>
    )
}

export default BreadcrumbItem