import React from "react";

import BreadcrumbItem from "./BreadcrumbItem";

import { StyledBreadcrumb } from "./Breadcrumb.styled";

const Breadcrumb = (props) => {
  return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
