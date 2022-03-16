import React from 'react';

import { StyledTabsContent } from './TabsContent.styled';

const TabsContent = (props) => {
  return <StyledTabsContent>{props.children}</StyledTabsContent>;
};

export default TabsContent;
