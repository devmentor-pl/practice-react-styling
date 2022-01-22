import React from 'react';

import StyledBreadcrumb from './Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem';

Breadcrumb.Item = BreadcrumbItem;

export default function Breadcrumb(props) {
	return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>;
}
