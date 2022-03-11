import React from 'react';

import { StyledBreadcrumbItem } from './BreadcrumbItem.styled';

const BreadcrumbItem = (props) => {
  return <StyledBreadcrumbItem>{props.children}</StyledBreadcrumbItem>;
};

export default BreadcrumbItem;
