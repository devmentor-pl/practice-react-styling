import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.styled";
import breadcrumbSettings from "./BreadcrumbSettings";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      {breadcrumbSettings.map((crumb) => (
        <BreadcrumbItem
          title={crumb.title}
          href={crumb.href}
          active={crumb.active}
        ></BreadcrumbItem>
      ))}
    </StyledBreadcrumb>
  );
};
export default Breadcrumb;
