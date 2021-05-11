import React from "react";
import StyledTab from "./Tab.styled";

const Tab = (props) => {
  const { state, name } = props;
  const [active, setActive] = state;
  console.log(active);
  return (
    <StyledTab
      className={active === name ? "active" : ""}
      onClick={() => setActive(name)}
    >
      {props.children}
    </StyledTab>
  );
};

export default Tab;
