import React from 'react'

import { StyledCard } from './styled/Card.styled'
import Image from './Img'
import Body from './CardBody'

const Card = () => {
	return (
		<StyledCard>
			<Image />
			<Body></Body>
		</StyledCard>
	)
}

export default Card
