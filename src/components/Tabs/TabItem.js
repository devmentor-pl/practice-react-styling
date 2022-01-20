import React, { useContext } from "react";
import { StyledTabItem } from "./TabItem.styled";
import TabsContext from "./TabsContext";

const TabItem = (props) => {
  const tabsInfo = useContext(TabsContext);
  const { title, disabled, eventKey } = props;

  return (
    <StyledTabItem
      role="tab"
      disabled={disabled}
      isActive={tabsInfo.activeTab === eventKey}
      onClick={!disabled ? () => tabsInfo.setActiveTab(eventKey) : null}
    >
      {title}
    </StyledTabItem>
  );
};

export default TabItem;
