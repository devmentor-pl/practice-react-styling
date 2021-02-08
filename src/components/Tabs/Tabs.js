import React, { useState } from "react";
import Tab from "./Tab";
import StyledTabs from "./Tabs.styled";

const Tabs = (props) => {
  const initActiveTab = "home";
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  const tabList = props.children.map((tab, index) => {
    const {
      props: { title, eventKey, active, disabled },
    } = tab;
    return (
      <Tab
        key={index}
        handleTabChange={handleTabChange}
        active={eventKey === activeTab}
        eventKey={eventKey}
        title={title}
        disabled={disabled}
      />
    );
  });

  const renderTabContent = () => {
    return props.children.map((child, index) => {
      const {
        props: { eventKey, children },
      } = child;
      const { props } = children;
      if (activeTab === eventKey) {
        return <div key={index}>{props.children}</div>;
      }
    });
  };

  return (
    <>
      <StyledTabs>{tabList}</StyledTabs>
      {renderTabContent()}
    </>
  );
};

export default Tabs;
