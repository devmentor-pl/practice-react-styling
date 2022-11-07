import React from "react";
import { useState } from "react";
import StyledTabs from "./Tabs.styled";
import tabsSettings from "./tabsSettings";
import Tab from "./Tab";

const Tabs = () => {
  const [isActive, setActive] = useState(false);
  const clickHandler = (id) => {
    console.log(id);
    isActive ? setActive(false) : setActive(true);
  };

  return (
    <StyledTabs>
      {tabsSettings.map((tab) => {
        return (
          <>
            <Tab
              onClick={() => clickHandler(tab.id)}
              active={isActive}
              key={tab.id}
              title={tab.title}
              disabled={tab.disabled}
            ></Tab>
            <p style={isActive ? { display: "block" } : { display: "none" }}>
              {tab.content}
            </p>
          </>
        );
      })}
    </StyledTabs>
  );
};
export default Tabs;
