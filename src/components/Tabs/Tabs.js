import React from "react";

import { StyledTabs, StyledTabsChild, StyledTabsLink } from "./Tabs.styled";

const Tabs = (props) => {
    const {children,defaultKey} = props
  const [state, setState] = React.useState(defaultKey);

  function handleClick(key) {
    setState(key);
  }

  return (
    <>
      <StyledTabs>
        {React.Children.map(children, (child) => (
          <StyledTabsLink
            active={props.eventKey === state}
            onClick={() => (!child.props.disabled && handleClick(props.eventKey))}
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