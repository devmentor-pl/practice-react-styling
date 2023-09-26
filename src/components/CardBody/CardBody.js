import React from "react";

import { StyledCardBody } from "./CardBody.styled";

const CardBody = (props) => {
  const { children } = props
  return (
    <StyledCardBody>
      {children}
    </StyledCardBody>
  )
}

export default CardBody