import React from "react";

import { StyledCardText } from "./CardText.styled";

const CardText = (props) => {
  const { children } = props

  return (
    <StyledCardText>{children}</StyledCardText>
  )
}

export default CardText