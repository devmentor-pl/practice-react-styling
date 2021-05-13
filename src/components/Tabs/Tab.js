import React from "react";
import StyledTab from "./Tab.styled";

const Tab = (props) => {
  const { state, name } = props;
  const [active, setActive] = state;
  console.log(active);

  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { active: active });
  });

  return (
    <StyledTab
      className={active === name ? "active" : ""}
      onClick={() => setActive(name)}
    >
      {childrenWithProps}
    </StyledTab>
  );
};

export default Tab;
