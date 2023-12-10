import React from "react";

import { StyledBreadcrumbItem} from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
    const {children} = props
  return (
    <StyledBreadcrumbItem active={props.active}>
      {props.href ? <a href={props.href}>{children}</a> : null}
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;