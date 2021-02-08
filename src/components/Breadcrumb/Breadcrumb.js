import React from "react";
import StyledBreadcrumb from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ children }) => <StyledBreadcrumb>{children}</StyledBreadcrumb>;

Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;
