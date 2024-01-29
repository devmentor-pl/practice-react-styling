import React, { useState } from 'react'

import TabsItem from './TabsItem/TabsItem'
import TabsText from './TabsText/TabsText'
import { StyledCol, StyledNav, StyledDiv } from './Tabs.styled'
// import TabsItems from './TabsItems'

const Tabs = () => {
	const TabsItems = [
		{
			name: 'Home',
			active: false,
			id: 1,
			text: `1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus
			rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`,
		},
		{
			name: 'Profile',
			active: false,
			id: 2,
			text: `2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus
			rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`,
		},
		{
			name: 'Contact',
			active: false,
			id: 3,
			text: `3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus
			rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`,
		},
	]

	const [items, setActive] = useState(TabsItems)

	const onClick = idToActivate => {
		console.log(TabsItems)
		const newItems = items.map(item => {
			if (item.id === idToActivate) {
				return { ...item, active: true }
			}
			return item
		})
		setActive(newItems)
	}

	return (
		<StyledCol>
			<StyledNav>
				<TabsItem data={TabsItems} onClick={onClick}></TabsItem>
			</StyledNav>
			<StyledDiv>
				<TabsText data={TabsItems}></TabsText>
			</StyledDiv>
		</StyledCol>
	)
}

export default Tabs
