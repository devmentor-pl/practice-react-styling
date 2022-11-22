import React from "react";
import StyledCardTitle from "./CardTitle.styled";
const CardTitle = (props) => {
  const { title } = props;
  return <StyledCardTitle>{title}</StyledCardTitle>;
};
export default CardTitle;
