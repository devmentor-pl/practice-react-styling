import React from 'react';
import StyledCardText from './styled/StyledCardText';

const CardText = (props) => {
	return <StyledCardText>{props.children}</StyledCardText>
}

export default CardText;