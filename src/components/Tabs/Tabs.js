import React, { useState } from "react";

import { TabNavStyled } from "./TabNav.styled";
import { TabNavItemStyled } from "./TabNavItem.styled";

const Tabs = props => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveKey || "");

  const generateTabs = () => {
    return props.children.map(tabItem => {
      const { title, eventKey, disabled = false } = tabItem.props;

      return (
        <TabNavItemStyled
          key={title}
          href="#"
          active={eventKey === activeTab}
          disabled={disabled}
          onClick={e => setActiveTab(eventKey)}
        >
          {title}
        </TabNavItemStyled>
      );
    });
  };

  const generateTabsContent = () => {
    return props.children.filter(tabItem => {
      const { eventKey } = tabItem.props;

      return eventKey === activeTab;
    });
  };

  return (
    <>
      <TabNavStyled>{generateTabs()}</TabNavStyled>
      <div>{generateTabsContent()}</div>
    </>
  );
};

export default Tabs;
