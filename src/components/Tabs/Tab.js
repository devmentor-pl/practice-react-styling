import React from 'react';

import { StyledTab } from './Tab.styled.js';

const Tab = props => {
  return (
    <StyledTab>{props.children}</StyledTab>
  );
}

export default Tab;
