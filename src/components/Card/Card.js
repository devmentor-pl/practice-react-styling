import React from "react";

import StyledCard from "./styled/Card.styled";
import Img from "./Img";
import Body from "./Body";
import Title from "./Title";
import Text from "./Text";

const Card = ({ style, children }) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};

export default Object.assign(Card, {
  Img: Img,
  Body: Body,
  Title: Title,
  Text: Text,
});
