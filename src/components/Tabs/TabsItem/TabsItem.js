import React from 'react'

import { StyledTabsItem } from './TabsItem.styled'
// import TabsItems from '../TabsItems'

const TabsItem = ({ onClick, data }) => {
	const items = data.map(item => (
		<>
			<StyledTabsItem onClick={() => onClick(item.id)} key={item.id}>
				<a id={item.id} href="#" className={item.active ? 'active' : ''}>
					{item.name}
				</a>
			</StyledTabsItem>
		</>
	))

	return items
}

export default TabsItem
