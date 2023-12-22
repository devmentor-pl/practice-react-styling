import React from "react";
import BreadcrumbStyled from "./BreadcrumbStyled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ children }) => {
  return <BreadcrumbStyled>{children}</BreadcrumbStyled>;
};

export default Object.assign(Breadcrumb, { Item: BreadcrumbItem });
