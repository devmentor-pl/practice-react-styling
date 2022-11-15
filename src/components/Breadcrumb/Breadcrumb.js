import React from 'react';

import StyledBreadcrumb from './Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem';

Breadcrumb.Item = BreadcrumbItem;

function Breadcrumb(props) {
	  return (
        <StyledBreadcrumb>
            {props.children}
        </StyledBreadcrumb>
    );
}

export default Breadcrumb;
