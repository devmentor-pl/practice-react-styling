import React from 'react';
import StyledCardTitle from './styled/StyledCardTitle';

const CardTitle = (props) => {
	return <StyledCardTitle>{props.children}</StyledCardTitle>
}

export default CardTitle;