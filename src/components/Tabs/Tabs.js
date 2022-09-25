import React from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab.styled";

function Tabs() {
  const [active, setActive] = useState("home");
  const { children } = props;
  return (
    <StyledTabs>
      {children.map((eventKey, disabled, title) => (
        <Tab
          key={eventKey}
          active={active === eventKey}
          onClick={() => setActive(eventKey)}
          disabled={disabled}
        >
          {title}
        </Tab>
      ))}
    </StyledTabs>
  );
}

export default Tabs;
