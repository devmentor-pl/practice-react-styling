import React from 'react';

import StyledBreadcrumb from './Breadcrumb.styled';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = (props) => {
	return (
		<>
			<StyledBreadcrumb>{props.children}</StyledBreadcrumb>
		</>
	);
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb; 