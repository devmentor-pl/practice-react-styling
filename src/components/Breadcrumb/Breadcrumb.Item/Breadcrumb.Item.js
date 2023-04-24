import React from "react";

import {
  StyledBreadcrumbItem,
  StyledBreadcrumbItemLink,
} from "./Breadcrumb.Item.styled";

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItem>
      <StyledBreadcrumbItemLink
        href={props.href}
        type={props.type}
        first={props.first}
      >
        {props.children}
      </StyledBreadcrumbItemLink>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
