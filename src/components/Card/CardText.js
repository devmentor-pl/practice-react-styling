import React from "react";

import { StyledCardText } from "./CardText.styled";

const CardText = (props) => {
  return <StyledCardText>{props.children}</StyledCardText>;
};

export default CardText;
