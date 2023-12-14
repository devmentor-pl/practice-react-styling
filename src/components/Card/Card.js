import React from 'react';
import { StyledCard } from './Card.styled';

const Card = (props) => {
  const { children, style } = props;
  return <StyledCard style={style}>{children}</StyledCard>;
};

export default Card;
