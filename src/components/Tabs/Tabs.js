import React, { useState } from "react";
import { StyledTabs } from "./Tabs.styled";
import TabDescription from "./TabDescription";
import TabsContext from "./TabsContext";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveKey || "");

  const renderTabsDescriptions = () => {
    return props.children.map((tab) => {
      const { eventKey, children: tabParagraph } = tab.props;
      return (
        <TabDescription key={eventKey} isActive={eventKey === activeTab}>
          {tabParagraph}
        </TabDescription>
      );
    });
  };

  return (
    <>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <StyledTabs>{props.children}</StyledTabs>
        <div>{renderTabsDescriptions()}</div>
      </TabsContext.Provider>
    </>
  );
};

export default Tabs;
