import React from "react";
import { useState } from "react";
import StyledTab from "./Tab.styled";
import StyledTabs from "./Tabs.styled";

import Tab from "./Tab";

const Tabs = ({ children }) => {
  const [active, setActive] = useState("");

  // const clickHandler = (id) => {
  //   console.log(id);
  //   isActive ? setActive(false) : setActive(true);
  // };

  const getTabs = () => {
    return children.map((item) => {
      const { title, eventKey, disabled } = item.props;

      return (
        <StyledTab
          href="#"
          key={title}
          disabled={disabled}
          active={eventKey === active}
          onClick={() => setActive(eventKey)}
        >
          {title}
        </StyledTab>
      );
    });
  };

  const getContent = () => {
    return children.filter((item) => {
      const { eventKey } = item.props;
      return eventKey === active;
    });
  };

  return (
    <>
      <StyledTabs>{getTabs()}</StyledTabs>
      <>{getContent()}</>
    </>
  );
};
export default Tabs;
