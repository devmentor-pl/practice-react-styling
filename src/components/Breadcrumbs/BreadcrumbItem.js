import React from "react";
import BreadcrumbItemStyled from "./BreadCrumbItemStyled";
import BreadcrumbItemContainer from "./BreadcrumbItemContainer";

const BreadcrumbItem = ({ href, children, active = true }) => {
  return (
    <BreadcrumbItemContainer>
        <BreadcrumbItemStyled isActive={active} href={href}>
            {children}
        </BreadcrumbItemStyled>
    </BreadcrumbItemContainer>

  );
};

export default BreadcrumbItem;
