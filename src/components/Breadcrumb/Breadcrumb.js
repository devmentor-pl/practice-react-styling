import React from 'react';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb = (props) => {
  const { children } = props;
  return (
    <nav>
      <StyledBreadcrumb>{children}</StyledBreadcrumb>
    </nav>
  );
};

export default Breadcrumb;
