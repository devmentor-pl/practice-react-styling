import React from 'react';

import { StyledAlert } from './Alert.styled';
const Alert = (props) => {
  return <StyledAlert variant={'success'}>{props.children}</StyledAlert>;
};

export default Alert;
