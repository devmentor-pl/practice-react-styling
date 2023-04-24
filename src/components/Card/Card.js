import React from "react";

import { StyledCard } from "./CardStyled";

const Card = (props) => {
  return <StyledCard style={props.style}>{props.children}</StyledCard>;
};

export default Card;
