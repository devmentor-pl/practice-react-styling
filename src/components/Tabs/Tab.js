import React, { useContext } from 'react';

import { StyledTab } from './styled/Tab.styled';
import ActiveContext from './context';

const Tab = (props) => {
  const activeTab = useContext(ActiveContext);

  return (
    <StyledTab
      disabled={props.disabled}
      active={activeTab.activeElement === props.eventKey ? true : false}
      href='#'
      onClick={() => activeTab.setActiveElement(props.eventKey)}
    >
      {props.title}
    </StyledTab>
  );
};

export default Tab;
