import React from "react";
import { StyledSonnet, ActiveSonnet } from "./Sonnet.styled";

const Sonnet = (props) => {
  const { name, active } = props;

  if (name === active) {
    return <ActiveSonnet>{props.children}</ActiveSonnet>;
  }

  return <StyledSonnet>{props.children}</StyledSonnet>;
};

export default Sonnet;
