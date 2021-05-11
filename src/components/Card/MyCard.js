import React from "react";
import StyledCard from "./MyCard.styled";
import CardImg from "./CardImg";
import CardBody from "./CardBody";
const MyCard = () => {
  return (
    <StyledCard>
      <CardImg></CardImg>
      <CardBody></CardBody>
    </StyledCard>
  );
};

export default MyCard;
