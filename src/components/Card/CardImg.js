import React from "react";
import StyledImg from "./CardImg.styled";

const CardImage = (props) => {
  const { src } = props;

  return <StyledImg src={src}></StyledImg>;
};
export default CardImage;
