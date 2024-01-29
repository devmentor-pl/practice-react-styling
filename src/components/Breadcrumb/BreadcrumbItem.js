import React from 'react'

import { StyledBreadcrumbItem } from './BreadcrumbItem.styled'
import { BreadcrumItems } from './BreadCrumbItems'

const BreadcrumbItem = () => {
	const item = BreadcrumItems.map(item => (
		<StyledBreadcrumbItem key={item.id}>
			<a href="#" className={item.active ? 'active' : ''}>
				{item.name}
			</a>
			<span>/</span>
		</StyledBreadcrumbItem>
	))

	return item
}

export default BreadcrumbItem
