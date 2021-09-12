import React from "react";

import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
    const { href, active } = props;
    
    return(
        <StyledBreadcrumbItem active={active}>
            <a href={href}>{props.children}</a>
        </StyledBreadcrumbItem>
    );
};

export default BreadcrumbItem;
