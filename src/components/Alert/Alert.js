import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = ({ variant, children }) => {
  return <StyledAlert variant={variant}>{children}</StyledAlert>;
};

export default Alert;