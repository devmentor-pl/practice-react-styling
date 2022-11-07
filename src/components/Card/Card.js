import React from "react";
import StyledCard from "./Card.styled";
import CardImage from "./CardImg";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import Button from "../Button/Button";

const Card = () => {
  return (
    <StyledCard>
      <CardImage src={"https://picsum.photos/100/80"}></CardImage>
      <CardBody>
        <CardTitle title="Card Title"></CardTitle>
        <CardText
          content={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
        ></CardText>
        <Button variant="primary" size="md">
          Go somewhere
        </Button>
      </CardBody>
    </StyledCard>
  );
};
export default Card;
