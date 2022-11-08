import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.styled";
// import breadcrumbSettings from "./BreadcrumbSettings";
// import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb>{props.children}
    </StyledBreadcrumb>
  );
};
export default Breadcrumb;
