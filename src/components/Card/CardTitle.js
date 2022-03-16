import React from 'react';

import { StyledCardTitle } from './CardTitle.styled';
const CardTitle = (props) => {
  return <StyledCardTitle>{props.children}</StyledCardTitle>;
};

export default CardTitle;
