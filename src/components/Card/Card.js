import React from 'react';

import CardBody from './CardBody';
import CardImg from './CardImg';
import CardTitle from './CardTitle';
import CardText from './CardText';

import { StyledCard } from './styles/Card';

const Card = props => {
    console.log('%cCard props: ', 'color:green', props);
    console.log('%cCard props.children: ', 'color:green', props.children);
    return <StyledCard>{ props.children }</StyledCard>;
};

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;