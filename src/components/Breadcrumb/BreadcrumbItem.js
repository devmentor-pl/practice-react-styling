import React from "react";

import StyledBreadcrumbItem from "./styled/BreadcrumbItem.styled";

const BreadcrumbItem = ({ active = false, href, children }) => {
  const prefix = "breadcrumb";

  return (
    <StyledBreadcrumbItem active={active} className={`${prefix}__item`}>
      {active ? (
        children
      ) : (
        <a href={href} role="button" className={`${prefix}__link`}>
          {children}
        </a>
      )}
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
