import React from "react";

import { DefaultStyledBreadcrumb } from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ children }) => {
  return <DefaultStyledBreadcrumb>{children}</DefaultStyledBreadcrumb>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
