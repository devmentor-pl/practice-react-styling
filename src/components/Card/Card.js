import React from "react";

import { StyledCard } from "./Card.styled";

const Card = (props) => {
    const { style } = props
    return <StyledCard style={style}>{props.children}</StyledCard>;
};

export default Card;
