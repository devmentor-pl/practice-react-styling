import React from "react";

import { StyledCard } from "./Card.styled";
import CardImg from "../CardImg";
import CardBody from "../CardBody";
import CardTitle from "../CardTitle";
import CardText from "../CardText";

const Card = (props) => {
  const { children } = props
  return (
    <StyledCard style={props.style}>{children}</StyledCard>
  )
}

export default Object.assign(Card, {
  Img: CardImg,
  Body: CardBody,
  Title: CardTitle,
  Text: CardText
})