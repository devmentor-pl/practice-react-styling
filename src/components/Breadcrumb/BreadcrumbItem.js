import React from "react";
import StyledBreadcrumbItem from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
  const { children, href, active } = props;
  return (
    <StyledBreadcrumbItem active={active}>
      <a href={href}>{children}</a>
    </StyledBreadcrumbItem>
  )

};;
export default BreadcrumbItem;
