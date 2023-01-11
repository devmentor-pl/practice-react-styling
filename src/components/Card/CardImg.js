import React from "react";
import { StyledImg } from "./Card.styled";

const CardImgage = props => {
    const {src} = props;

    return(
        <StyledImg src={src}></StyledImg>
    )
}

export default CardImgage