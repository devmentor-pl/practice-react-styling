import React from "react";

import { StyledCardTitle } from "./CardTitle.styled";

const CardTitle = (props) => {
  const { children } = props
  return (
    <StyledCardTitle>{children}</StyledCardTitle>
  )
}

export default CardTitle