import React, { useState } from "react";
import { StyledTabs } from "./Tabs.styled";
const Tabs = ({ children }) => {
const [activeKey, setActiveKey] = useState('profile');
const handleTabClick = (key) => {
    setActiveKey(key);
  };
  return (
      <StyledTabs activeKey={activeKey}>{React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.eventKey === activeKey,
          onTabClick: handleTabClick,
        })
      )}</StyledTabs>
  );
};

export default Tabs;
 