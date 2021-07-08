import React from "react";

import CardImg from "./CardImg";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

import { CardStyled } from "./Card.styled";

const Card = ({ children, style = {} }) => {
  return <CardStyled style={style}>{children}</CardStyled>;
};

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
