import React from "react";
import StyledBreadcrumbItem from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
  const { title, href, active } = props;

  if (active === "true") {
    return (
      <StyledBreadcrumbItem active={active}>
        <a href={href}>{title}</a>
      </StyledBreadcrumbItem>
    );
  }

  return <StyledBreadcrumbItem active={active}>{title}</StyledBreadcrumbItem>;
};
export default BreadcrumbItem;
