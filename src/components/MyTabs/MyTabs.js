import React from "react";

import StyledTabList from "./styled/TabList";
import StyledTabContent from "./styled/TabContent";
import { useState } from "react";
import StyledTabItem from "./styled/TabItem";

const MyTabs = ({ defaultActiveKey, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  const renderTabs = children.map(
    ({ props: { eventKey, title, disabled = false } }) => {
      return (
        <StyledTabItem
          key={title}
          eventKey={eventKey}
          activeTab={activeTab}
          disabled={disabled}
          onClick={() => !disabled && setActiveTab(eventKey)}
        >
          {/* Nie wiem za bardzo, czy ten # jest tutaj ok, ale znany mi wcześniej hack z javascript:void(0), sypie błędem w konsoli. Poniższe rozwiązanie dopisuje do url "#", a widzę, że w rozwiązaniu bootstrapowym jest to rozwiązane */}
          <a href="#">{title}</a>
        </StyledTabItem>
      );
    }
  );

  const renderTabsContent = children.map(
    ({ props: { eventKey, title, children } }) => (
      <StyledTabContent key={title} eventKey={eventKey} activeTab={activeTab}>
        {children}
      </StyledTabContent>
    )
  );

  return (
    <section>
      <nav role="tablist">
        <StyledTabList>{renderTabs}</StyledTabList>
      </nav>
      <section>{renderTabsContent}</section>
    </section>
  );
};

export default MyTabs;
