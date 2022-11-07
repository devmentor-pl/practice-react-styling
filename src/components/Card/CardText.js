import React from "react";
import StyledCardText from "./CardText.styled";
const CardText = (props) => {
  const { content } = props;
  return <StyledCardText>{content}</StyledCardText>;
};
export default CardText;
