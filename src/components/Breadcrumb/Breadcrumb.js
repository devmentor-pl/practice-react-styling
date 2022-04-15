import React from "react";

import { BreadcrumbStyled } from "./Breadcrumb.styled";

const Breadcrumb = props => {
  return (
    <nav>
      <BreadcrumbStyled>{props.children}</BreadcrumbStyled>
    </nav>
  );
};

export default Breadcrumb;
