import React from 'react'

import BreadcrumbItem from './BreadcrumbItem'
import { StyledBreadcrumb } from './Breadcrumb.styled'

const Breadcrumb = props => {
	// return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>
	return (
		<StyledBreadcrumb>
			<BreadcrumbItem></BreadcrumbItem>
		</StyledBreadcrumb>
	)
}

export default Breadcrumb
