import React from "react";

import { StyledText } from "./CardStyled";

const CardText = (props) => {
  return <StyledText>{props.children}</StyledText>;
};

export default CardText;
