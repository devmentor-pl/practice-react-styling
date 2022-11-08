import React from 'react';
import CardImage from './CardImage'
import CardBody from './CardBody'
import CardTitle from './CardTitle'
import CardText from './CardText'

import StyledCard from './Card.styled'

const Card = ({ children, style }) => <StyledCard style={style}>{children}</StyledCard>;

Card.Img = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;Text

export default Card;
