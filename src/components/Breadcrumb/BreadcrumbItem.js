import React from 'react';

import { StyledBreadcrumbItem } from './styled/BreadcrumbItem.styled';

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItem active={props.active}>
      <a href={props.href}>{props.children}</a>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;
