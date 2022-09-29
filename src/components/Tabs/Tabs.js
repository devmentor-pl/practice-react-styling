import React from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab.styled";
import { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.eventKey);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <StyledTabs>
        {children.map((tab) => {
          const { eventKey, title, active, disabled } = tab.props;
          return (
            <Tab
              key={eventKey}
              a
              href="#"
              onClick={(e) => handleClick(e, eventKey)}
              active={eventKey === activeTab}
              disabled={disabled}
            >
              {title}
            </Tab>
          );
        })}
      </StyledTabs>
      {children.map((one) => {
        if (one.props.eventKey === activeTab) {
          return <p>{one.props.children}</p>;
        }
      })}
    </>
  );
}

export default Tabs;
