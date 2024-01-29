import React from 'react'

import StyledBody from './styled/CardBody.styled'
import Title from './Title'
import Text from './Text'
import Button from './../Button'

const text = `Some quick example text to build on the card title and make up the bulk of the card's content.`

const Body = () => {
	return (
		<StyledBody>
			<Title title="Card Title" />
			<Text text={text} />
			<Button>Go somwhere</Button>
		</StyledBody>
	)
}

export default Body
