import React from "react";
import { StyledTab } from "./Tab.styled";
const Tab = ({ title, disabled, children, isActive, onTabClick, eventKey }) => {
  const handleClick = () => {
    if (!disabled) {
      onTabClick(eventKey);
    }
  };
  return (
    <>
      <StyledTab
        title={title}
        disabled={disabled}
        onClick={handleClick}
        isActive={isActive}
        href="#"
      >
        {title}
        <div className="tab__content">{isActive && children}</div>
      </StyledTab>
    </>
  );
};

export default Tab;
