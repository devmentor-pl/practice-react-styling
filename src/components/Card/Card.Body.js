import React from "react";

import { StyledBody } from "./CardStyled";

const CardBody = (props) => {
  return <StyledBody>{props.children}</StyledBody>;
};

export default CardBody;
