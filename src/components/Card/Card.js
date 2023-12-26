import React from "react";
import CardImg from './CardImg';
import CardBody from './CardBody'
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const Card = ({children}) => {
    return (
        <div>{children}</div>
    )
}

Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;