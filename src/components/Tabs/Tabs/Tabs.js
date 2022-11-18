import React, { useState } from "react";

import { StyledTabs, StyledLink } from "./TabsStyled";

import TabsContext from "../TabsContext";

const Tabs = (props) => {
  const [element, setElement] = useState(props.defaultActiveKey);

  const getName = (e) => {
    setElement(e.target.innerText);
  };

  console.log(element);
  const links = props.children.map((el) => el.props.eventKey);
  console.log(links);
  links.forEach((el) => console.log(el));

  return (
    <TabsContext.Provider value={element}>
      <StyledTabs defaultActiveKey={props.defaultActiveKey}>
        {links.map((el) => (
          <StyledLink styleLink={el} href="#" onClick={getName}>
            {el}
          </StyledLink>
        ))}
      </StyledTabs>
      {props.children}
    </TabsContext.Provider>
  );
};

export default Tabs;
