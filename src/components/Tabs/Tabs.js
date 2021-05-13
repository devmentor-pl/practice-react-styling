import React, { useState } from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab";
import Sonnet from "./Sonnet";

const Tabs = (props) => {
  const [active, setActive] = useState("home");

  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { state: [active, setActive] });
  });
  return <StyledTabs>{childrenWithProps}</StyledTabs>;
};

export default Tabs;
