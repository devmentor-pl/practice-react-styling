import React from "react";
import { StyledText } from "./Card.styled";

const CardText = props => {
    return (
        <StyledText>{props.children}</StyledText>
    )
}

export default CardText