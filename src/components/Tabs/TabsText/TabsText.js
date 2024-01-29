import React from 'react'

import { StyledTabsText } from './TabsText.styled'
// import TabsItems from '../TabsItems'

const TabsText = ({ data }) => {
	const item = data.map(item => (
		<>
			<StyledTabsText key={item.id} className={item.active ? 'active' : ''}>
				{item.text}
			</StyledTabsText>
		</>
	))

	return item
}

export default TabsText
