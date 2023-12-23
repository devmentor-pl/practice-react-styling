import React from "react";
import { StyledBreadItem } from "./BreadcrumbItem.styled";

const BreadcrumbItem = ({children, href, active}) => {
   return (
    <StyledBreadItem active={active}><a href={href}>{children}</a></StyledBreadItem>
   )
}

export default BreadcrumbItem;