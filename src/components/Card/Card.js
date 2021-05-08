import React from "react";

import CardBody from "./CardBody";
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

import { StyledCard } from "./Card.styled";

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
