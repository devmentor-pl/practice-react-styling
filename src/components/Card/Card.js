import React from 'react';

import StyledCard from './styled/StyledCard'
import CardImg from './CardImg';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';

const Card = (props) => {
	return(
		<StyledCard>{props.children}</StyledCard>
	);
}

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;


export default Card;