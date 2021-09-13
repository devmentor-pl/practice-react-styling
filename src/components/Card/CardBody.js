import React from 'react';
import CardBodyStyled  from './styled/CardBody.styled'

const CardBody = (props) => {
	return(
		<CardBodyStyled>
			{props.children}
		</CardBodyStyled>
	)
}

export default CardBody;