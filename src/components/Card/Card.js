import React from 'react';

import CardBody from "./CardBody";
import CardImg from "./CardImg";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

import { StyledCard } from './Card.styled';

const Card = (props) => {
    return <StyledCard>{props.children}</StyledCard>;
  };

Card.Body = CardBody;
Card.Img = CardImg;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;