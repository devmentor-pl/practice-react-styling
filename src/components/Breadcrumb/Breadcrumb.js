import React from "react";

import BreadcrumbItem from "../BreadcrumbItem";

import { StyledBreadcrumb } from "./Breadcrumb.styled";

const Breadcrumb = (props) => {
  return (
    <nav>
      <StyledBreadcrumb {...props}>{props.children}</StyledBreadcrumb>;
    </nav>
  );
};

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});
