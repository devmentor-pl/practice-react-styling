import React from 'react';

import { StyledTabContent } from './TabContent.styled';

const TabContent = (props) => {
  return (
    <StyledTabContent title={props.title} active={props.active}>
      {props.children}
    </StyledTabContent>
  );
};

export default TabContent;
