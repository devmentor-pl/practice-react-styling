import React from "react";

import { StyledTitle } from "./CardStyled";

const CardTitle = (props) => {
  return (
    <StyledTitle>
      <h5>{props.children}</h5>
    </StyledTitle>
  );
};

export default CardTitle;
