import React from 'react';
import CardBody from './CardBody';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardImg from './CardImg';

import StyledCard from './Card.styled';

function Card(props) {
	return <StyledCard>{props.children}</StyledCard>;
}

Card.Body = CardBody;
Card.Img = CardImg;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
