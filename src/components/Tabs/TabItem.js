import React, { useState } from "react";

import { StyledTabItem } from "./TabItem.styled";

const TabItem = (props) => {
  const [item, setItem] = useState("Profile");

  const handleClick = (e) => {
    setItem(e.target.innerHTML);
  };

  const { disabled, title } = props;
  return (
    <StyledTabItem
      onClick={handleClick}
      disabled={disabled}
      item={item}
      title={title}
    >
      {title}
    </StyledTabItem>
  );
};

export default TabItem;
