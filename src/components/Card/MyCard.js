import React from "react";
import StyledCard from "./MyCard.styled";

const MyCard = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default MyCard;
