import React from "react";

import { DefaultStyledCardBody } from "./CardBody.styled";

const CardBody = ({ children }) => {
  return <DefaultStyledCardBody>{children}</DefaultStyledCardBody>;
};

export default CardBody;
