import React from 'react';

import { StyledTabs } from './Tabs.styled';

const Tabs = (props) => {
  const selectTab = (e) => {
    console.log(props);
  };

  return <StyledTabs onClick={selectTab}>{props.children}</StyledTabs>;
};

export default Tabs;
