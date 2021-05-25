import React from 'react';

import { StyledBreadcrumb } from './styled/Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = (props) => {
  return (
    <nav>
      <StyledBreadcrumb>{props.children}</StyledBreadcrumb>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
