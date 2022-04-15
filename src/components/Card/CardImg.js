import React from "react";

import { StyledCardImg } from "./CardImg.styled";

const CardImg = (props) => {
    const { variant, src } = props;
    return <StyledCardImg src={src}>{props.children}</StyledCardImg>;
  };
  export default CardImg;