import React from "react";

import { StyledTabs, StyledTabsChild, StyledTabsLink } from "./Tabs.styled";

const Tabs = ({ children, defaultActiveKey }) => {
  const [state, setState] = React.useState(defaultActiveKey);

  function handleClick(key) {
    setState(key);
  }

  return (
    <>
      <StyledTabs>
        {React.Children.map(children, (child) => (
          <StyledTabsLink
            active={child.props.eventKey === state}
            onClick={() =>
              !child.props.disabled && handleClick(child.props.eventKey)
            }
            disabled={child.props.disabled}
          >
            {child.props.title}
          </StyledTabsLink>
        ))}
      </StyledTabs>
      {React.Children.map(children, (child) => (
        <StyledTabsChild active={child.props.eventKey === state}>
          {child}
        </StyledTabsChild>
      ))}
    </>
  );
};

export default Tabs;
