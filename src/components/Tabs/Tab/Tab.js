import React from "react";

import { StyledTabContent } from "./TabStyled";

const Tab = (props) => {
  return (
    <StyledTabContent eventKey={props.eventKey} title={props.title}>
      {props.children}
    </StyledTabContent>
  );
};

export default Tab;
