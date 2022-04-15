import React, { useState, useEffect } from "react";

import TabItem from "./TabItem";
import { StyledTabs } from "./Tabs.styled";

import TabsContext from "../../context/TabsContext";
import TabsStateContext from "../../context/TabsStateContext";

const Tabs = (props) => {
  const [currentItemInState, setCurrentItemInState] = useState("profile");

  const [current] = React.Children.map(props.children, (child) => {
    if (child.props.eventKey === currentItemInState) {
      return child.props.children.props;
    }
  });

  const [description, setDescription] = useState(current.children);

  useEffect(() => {
    setDescription(current.children);
  }, [currentItemInState]);

  const { Provider: TabsProvider } = TabsContext;
  const { Provider: TabsStateProvider } = TabsStateContext;

  return (
    <>
      <TabsStateProvider value={currentItemInState}>
        <TabsProvider value={setCurrentItemInState}>
          <StyledTabs>{props.children}</StyledTabs>
        </TabsProvider>
      </TabsStateProvider>
      <div>{description}</div>
    </>
  );
};

Tabs.Item = TabItem;

export default Tabs;
