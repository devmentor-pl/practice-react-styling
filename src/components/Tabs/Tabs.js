import React, { useState } from 'react';

import { StyledTabs } from './styled/Tabs.styled';
import { StyledContainer } from './styled/Container.styled';
import ActiveContext from './context';

const Tabs = (props) => {
  const [activeElement, setActiveElement] = useState(props.defaultActiveKey);

  const renderChildText = (TabItems) => {
    return TabItems.map((Tab) => {
      const TabChild = Tab.props.children;
      const TabText = TabChild.props.children;
      const TabKey = Tab.props.eventKey;
      return activeElement === TabKey ? (
        <p key={TabKey} className='active'>
          {TabText}
        </p>
      ) : (
        <p key={TabKey} className='disabled'>
          {TabText}
        </p>
      );
    });
  };

  return (
    <>
      <ActiveContext.Provider value={{ activeElement, setActiveElement }}>
        <nav>
          <StyledTabs>{props.children}</StyledTabs>
        </nav>
        <StyledContainer>{renderChildText(props.children)}</StyledContainer>
      </ActiveContext.Provider>
    </>
  );
};

export default Tabs;
