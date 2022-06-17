import React from "react";

import StyledCardTitle from "./styled/CardTitle.styled";

const CardTitle = (props) => {
  return <StyledCardTitle>{props.children}</StyledCardTitle>;
};

export default CardTitle;
