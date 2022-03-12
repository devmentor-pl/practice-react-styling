import React from 'react';

import { StyledCardImg } from './CardImg.styled';
const CardImg = (props) => {
  return <StyledCardImg src={props.src}>{props.children}</StyledCardImg>;
};

export default CardImg;
