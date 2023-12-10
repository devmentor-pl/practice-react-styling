import React from "react";

import { StyledCard } from "./Card.styled";

const Card = (props) => {
    const { style,children } = props
    return <StyledCard style={style}>{children}</StyledCard>;
};

export default Card;