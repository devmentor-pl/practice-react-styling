import React from "react";
import StyledBreadcrumbItem from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
    return (
        <StyledBreadcrumbItem active>
            <a href={props.href}>{props.label}</a>
        </StyledBreadcrumbItem>
    );
};

export default BreadcrumbItem;
