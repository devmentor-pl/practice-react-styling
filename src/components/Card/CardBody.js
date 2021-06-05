import React from 'react';
import StyledCardBody from './styled/StyledCardBody'

const CardBody = (props) => {
	return(
		<StyledCardBody>
			{props.children}
		</StyledCardBody>
	)
}

export default CardBody;