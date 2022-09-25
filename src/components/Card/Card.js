import React from "react";

import CardBody from "./CardBody";
import CardImg from "./CardImg";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

import { DefaultStyledCard } from "./Card.styled";

const Card = ({ children }) => {
  return <DefaultStyledCard>{children}</DefaultStyledCard>;
};

Card.Body = CardBody;
Card.Img = CardImg;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;
