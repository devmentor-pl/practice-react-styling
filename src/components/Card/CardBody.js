import React from "react";
import StyledCardBody from "./CardBody.styled";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import Button from "./../Button/Button";

const CardBody = () => {
  return (
    <StyledCardBody>
      <CardTitle></CardTitle>
      <CardText></CardText>
      <Button size="sm"> Go somewhere</Button>
    </StyledCardBody>
  );
};

export default CardBody;
