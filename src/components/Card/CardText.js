import React from 'react';

import { StyledText } from './styled/CardText.styled';

const CardText = (props) => {
  return <StyledText>{props.children}</StyledText>;
};

export default CardText;
