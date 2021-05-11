import React from "react";

import { StyledAlert, VariantedAlert } from "./Alert.styled";

const Alert = (props) => {
  const { variant } = props;
  if (variant) {
    return <VariantedAlert variant={variant}>{props.children}</VariantedAlert>;
  }
  return <StyledAlert>{props.children}</StyledAlert>;
};

export default Alert;
