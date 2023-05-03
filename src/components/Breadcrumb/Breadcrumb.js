import React from "react";

import BreadcrumbItem from "./BreadcrumbItem";
import StyledBreadcrumbList from "./styled/BreadcrumbList..styled";

const Breadcrumb = ({
  children,
  className = "mybreadcrumb",
  label = "breadcrumb",
  as: Component = "nav",
}) => {
  return (
    <Component aria-label={label}>
      <StyledBreadcrumbList className={className}>
        {children}
      </StyledBreadcrumbList>
    </Component>
  );
};

Breadcrumb.displayName = "Breadcrumb";

export default Object.assign(Breadcrumb, { Item: BreadcrumbItem });
