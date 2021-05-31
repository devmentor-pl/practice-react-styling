import React from 'react';

import StyledBreadcrumbItem from './styled/StyledBreadcrumbItem';

const BreadcrumbItem = (props) => {
	return(
		<StyledBreadcrumbItem>
			<a href={props.href}>{props.children}</a>
		</StyledBreadcrumbItem>
	)
}

export default BreadcrumbItem;