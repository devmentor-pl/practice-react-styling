import React from "react";

import { DefaultStyledText } from "./CardText.styled";

const CardText = ({ children }) => {
  return <DefaultStyledText>{children}</DefaultStyledText>;
};

export default CardText;
