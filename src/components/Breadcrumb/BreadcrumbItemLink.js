import React from 'react';

import { StyledBreadcrumbItemLink } from './BreadcrumbItemLink.styled';

const BreadcrumbItem = (props) => {
  return (
    <StyledBreadcrumbItemLink href={props.href} active={false}>
      {props.children}
    </StyledBreadcrumbItemLink>
  );
};

export default BreadcrumbItem;
