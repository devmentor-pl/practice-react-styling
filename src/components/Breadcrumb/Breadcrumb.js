import React from "react";
import BreadcrumbItem from "../BreadcrumbItem";

import { StyledBreadcrumb, OlBreadcrumb } from './Breadcrumb.styled'

const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb>
      <OlBreadcrumb>
        {props.children}
      </OlBreadcrumb>
    </StyledBreadcrumb>
  )
}

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem
})
