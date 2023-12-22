import React from "react";
import { useState } from "react";

import StyledTabData from "./StyledTabContent";
import StyledTab from "./StyledTab"
import StyleTabList from "./StyleTabList";

const Tabs = ({ initTab, children }) => {
  const [activeTab, setActiveTab] = useState(initTab);

  const tabsData = children.map(
    ({ props: { eventKey, name, children } }) => (
      <StyledTabData activeTab={activeTab} eventKey={eventKey} key={name}>
        {children}
      </StyledTabData>
    )
  );

  const renderTabs = children.map(
    ({ props: { disabled = false, name, eventKey } }) => {

      const handleClick = () => {
        if (!disabled) {
          setActiveTab(eventKey);
        }
      };

      return (
        <StyledTab
          eventKey={eventKey}
          activeTab={activeTab}
          disabled={disabled}
          onClick={handleClick}
        >
          <a href="#">{name}</a>
        </StyledTab>
      );
    }
  );


  return (
    <section>
      <div>
        <StyleTabList>{renderTabs}</StyleTabList>
      </div>
      <section>{tabsData}</section>
    </section>
  );
};

export default Tabs;