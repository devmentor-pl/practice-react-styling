import React, { useState } from 'react';

import { StyledTab } from './Tab.styled';

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(false);

  const changeActiveStatus = (e) => {
    console.log(typeof props.active);

    // props.active === false;
    setActiveTab();
    setActiveTab(!activeTab);
  };

  return (
    <StyledTab
      href={props.href}
      title={props.title}
      active={activeTab}
      onClick={changeActiveStatus}
    >
      {props.children}
    </StyledTab>
  );
};

export default Tab;
