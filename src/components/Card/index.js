import React from "react";

import Card from "./Card";
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardText from "./CardText";

export default Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Body: CardBody,
  Text: CardText,
});
