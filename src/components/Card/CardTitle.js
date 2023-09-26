import React from "react";
import { StyledCardTitle } from "./Card.styled";

const CardTitle = (props) => {
    return <StyledCardTitle>{props.children}</StyledCardTitle>
}

export default CardTitle