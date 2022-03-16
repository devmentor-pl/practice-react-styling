import React from "react";

import { StyledBreadcrumb } from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => (
  <nav>
    <StyledBreadcrumb>{props.children}</StyledBreadcrumb>
  </nav>
);

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
