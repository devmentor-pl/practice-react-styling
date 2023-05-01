import React from 'react';

import { StyledAlert } from "./styled/Alert.styled";

const Alert = ({ variant, children }) => {
  return <StyledAlert variant={variant}>{children}</StyledAlert>;
};

export default Alert;