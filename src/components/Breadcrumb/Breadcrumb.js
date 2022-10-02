import React from "react";

import { StyledBreadcrumb, StyledBreadcrumbPanel } from "./Breadcrumb.styled";

const Breadcrumb = (props) => {
  return (
    <StyledBreadcrumb>
      <StyledBreadcrumbPanel>{props.children}</StyledBreadcrumbPanel>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
