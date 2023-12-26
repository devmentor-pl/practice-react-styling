import React from 'react';
import { StyledAlert } from './Alert.styled';

const Alert = (props) => {
  const { children, variant } = props;

  return <StyledAlert variant={variant}>{children}</StyledAlert>;
};

export default Alert;
