import React from 'react';
import StyledBreadcrumb from './Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = ({ children }) => {
	return <StyledBreadcrumb>{children}</StyledBreadcrumb>;
};

export default Object.assign(Breadcrumb, {
	Item: BreadcrumbItem,
});
