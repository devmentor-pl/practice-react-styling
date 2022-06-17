import React from "react";

import StyledCardBody from "./styled/CardBody.styled";

const CardBody = (props) => {
  return <StyledCardBody>{props.children}</StyledCardBody>;
};

export default CardBody;
