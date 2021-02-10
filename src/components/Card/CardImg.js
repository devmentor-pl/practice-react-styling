import React from 'react';

import { StyledImg } from './styled/CardImg.styled';

const CardImg = (props) => {
  return <StyledImg src={props.src} />;
};

export default CardImg;
