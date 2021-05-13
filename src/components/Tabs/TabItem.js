import React, { useState } from "react";

import { StyledTabItem } from "./TabItem.styled";

import TabsContext from "../../context/TabsContext";
import TabsStateContext from "../../context/TabsStateContext";

const TabItem = (props) => {
  const { disabled, title, eventKey } = props;

  const { Consumer: TabsConsumer } = TabsContext;
  const { Consumer: TabsStateConsumer } = TabsStateContext;

  return (
    <TabsConsumer>
      {(setCurrentItemInState) => (
        <TabsStateConsumer>
          {(currentItemInState) => (
            <StyledTabItem
              onClick={() => setCurrentItemInState(eventKey)}
              disabled={disabled}
              eventKey={eventKey}
              state={currentItemInState}
            >
              {title}
            </StyledTabItem>
          )}
        </TabsStateConsumer>
      )}
    </TabsConsumer>
  );
};

export default TabItem;
