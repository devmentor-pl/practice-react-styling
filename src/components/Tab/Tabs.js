import React, { useState } from 'react';
import { StyledTab, StyledTabs } from './index';

const Tabs = (props) => {
  const { defaultActiveKey, children } = props;

  const [activeTab, setActiveTab] = useState(defaultActiveKey);

  const renderTabs = () => {
    return children.map((child) => {
      const { eventKey, disabled = false, title } = child.props;

      return (
        <StyledTab
          key={eventKey}
          href="#"
          eventKey={eventKey}
          active={eventKey === activeTab}
          disabled={disabled}
          onClick={() => !disabled && setActiveTab(eventKey)}
        >
          {title}
        </StyledTab>
      );
    });
  };

  const renderActiveDiv = () => {
    return children.filter((child) => {
      const { eventKey } = child.props;
      return eventKey === activeTab;
    });
  };

  return (
    <>
      <StyledTabs defaultActiveKey={defaultActiveKey}>
        {renderTabs()}
      </StyledTabs>
      <div>{renderActiveDiv()}</div>
    </>
  );
};

export default Tabs;
