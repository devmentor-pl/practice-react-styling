import React from "react";

import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
  return (
    <li>
      <StyledBreadcrumbItem {...props}>{props.children}</StyledBreadcrumbItem>
    </li>
  );
};

export default BreadcrumbItem;
