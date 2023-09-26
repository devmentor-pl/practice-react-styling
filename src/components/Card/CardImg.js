import React from "react";
import { StyledCardImg } from "./Card.styled";

const CardImg = ({ variant, src }) => {
    return <StyledCardImg src={src} variant={variant} />
}

export default CardImg