import React from 'react';
import CardTextStyled  from './styled/CardText.styled';

const CardText = (props) => {
	return <CardTextStyled>{props.children}</CardTextStyled>
}

export default CardText;