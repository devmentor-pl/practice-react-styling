import React from 'react';

import { StyledTab } from './Tab.styled.js';

const Tab = props => {
    const {children} = props
  return (
    <StyledTab>{children}</StyledTab>
  );
}

export default Tab;