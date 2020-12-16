import React from "react";

import { BreadcrumbItemStyled } from "./BreadcrumbItem.styled";

const BreadcrumbItem = props => {
  const { active, href } = props;

  return (
    <BreadcrumbItemStyled {...props}>
      {href && !active ? <a href={href}>{props.children}</a> : props.children}
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
