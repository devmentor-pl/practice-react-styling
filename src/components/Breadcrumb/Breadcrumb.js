import React from "react";
import { StyledBreadCrumb } from "./Breadcrumb.styled";

const Breadcrumb = props => {
    return (
        <StyledBreadCrumb>
            {props.children}
        </StyledBreadCrumb>)
}

export default Breadcrumb