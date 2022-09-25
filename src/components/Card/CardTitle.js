import React from "react";

import { DefaultStyledTitle } from "./CardTitle.styled";

const CardTitle = ({ children }) => {
  return (
    <DefaultStyledTitle>
      <h5>{children}</h5>
    </DefaultStyledTitle>
  );
};

export default CardTitle;
