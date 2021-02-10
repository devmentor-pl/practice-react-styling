import React from 'react';

import { StyledTitle } from './styled/CardTitle.styled';

const CardTitle = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default CardTitle;
