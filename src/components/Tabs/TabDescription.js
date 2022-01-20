import React from "react";
import StyledTabDescription from "./TabDescription.styled";

const TabDescription = ({ children, isActive }) => (
  <StyledTabDescription isActive={isActive}>{children}</StyledTabDescription>
);

export default TabDescription;
