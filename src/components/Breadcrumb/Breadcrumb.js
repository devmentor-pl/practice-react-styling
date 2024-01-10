import React from "react";
import {StyledBreadcrumb} from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ children }) => {
    return <StyledBreadcrumb aria-label="breadcrumb"><ol>{children}</ol></StyledBreadcrumb>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;