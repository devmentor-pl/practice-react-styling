import React from "react";

import { StyledBreadcrumb } from "./Breadcrumb.styled";
import { StyledList } from "./List.styled";

const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb variant={props.variant}>
      <StyledList>{props.children}</StyledList>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
