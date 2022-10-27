import React from 'react';

import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = (props) => {
	return(
		<StyledBreadcrumbItem>
			<a href={props.href}>{props.children}</a>
		</StyledBreadcrumbItem>
	)
}

export default BreadcrumbItem;