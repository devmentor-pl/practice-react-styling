import React from "react";
import StyledTab from "./Tab.styled";

const Tab = (props) => {
  const { title, disabled, href = "#", id, active, onClick } = props;
  return (
    <StyledTab
      onClick={onClick}
      active={active}
      id={id}
      href={href}
      disabled={disabled}
    >
      {title}
    </StyledTab>
  );
};
export default Tab;
