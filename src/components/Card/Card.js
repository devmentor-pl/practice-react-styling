import React from 'react';

import CardStyled  from './styled/Card.styled'
import CardImg from './CardImg';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';

const Card = (props) => {
	return(
		<CardStyled>{props.children}</CardStyled>
	);
}

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;