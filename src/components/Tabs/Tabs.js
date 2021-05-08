import React, { useState } from "react";

import TabItem from "./TabItem";

import { StyledTabs } from "./Tabs.styled";

const Tabs = (props) => {
  const initValue = props.children[1].props.children.props.children;
  const [description, setDescription] = useState(initValue);

  const handleClick = (e) => {
    e.preventDefault();

    const itemArr = props.children.map((item) => item.props.title);

    const descriptionArr = props.children.map(
      (descrip) => descrip.props.children.props.children
    );

    for (let i = 0; i < itemArr.length; i++) {
      if (e.target.innerHTML === itemArr[i]) {
        setDescription(descriptionArr[i]);
      }
    }
  };
  return (
    <>
      <StyledTabs onClick={handleClick}>{props.children}</StyledTabs>
      <div>{description}</div>
    </>
  );
};

Tabs.Item = TabItem;

export default Tabs;
