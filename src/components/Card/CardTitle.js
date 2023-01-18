import React from "react";
import { StyledTitle } from "./Card.styled";

const CardTitle = props => {
    return (
        <StyledTitle>{props.children}</StyledTitle>
    )
}

export default CardTitle