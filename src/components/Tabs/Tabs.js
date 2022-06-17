import React, { useState } from "react";

import { StyledTabs } from "./Tabs.styled";

const Tabs = ({ defaultActiveKey, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  const getTabsList = () => {
    return children.map((tab) => (
      <a href="#" onClick={() => setActiveTab(tab.props.eventKey)}>
        {tab.props.title}
      </a>
    ));
  };

  const getCurrentContent = () => {
    return children.filter((tab) => tab.props.eventKey === activeTab);
  };

  return (
    <>
      <StyledTabs>{getTabsList()}</StyledTabs>
      <div>{getCurrentContent()}</div>
    </>
  );
};

export default Tabs;
