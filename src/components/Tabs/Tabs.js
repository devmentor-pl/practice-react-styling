import React, { useState } from "react";
import { Menu, TabContent, ContentContainer } from "./Tabs.styled";
import { keyContext, keyChangeContext } from "./keyContext";

const Tabs = (props) => {
  const { defaultActiveKey, children } = props;
  const [key, setKey] = useState(defaultActiveKey);

  return (
    <>
      <keyChangeContext.Provider value={setKey}>
        <keyContext.Provider value={key}>
          <Menu>{children}</Menu>
          <TabContent>
            {children.map((child, id) => (
              <ContentContainer
                key={id}
                isDisplayed={child.props.eventKey === key}
              >
                {child.props.children}
              </ContentContainer>
            ))}
          </TabContent>
        </keyContext.Provider>
      </keyChangeContext.Provider>
    </>
  );
};

export default Tabs;
