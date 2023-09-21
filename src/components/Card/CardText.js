import React from "react";
import { StyledCardText } from "./Card.styled";

const CardText = (props) => {
       return <StyledCardText>{props.children}</StyledCardText>
}

export default CardText