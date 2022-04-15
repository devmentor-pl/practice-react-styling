import React from "react";
import StyledCard from "./Card.styled";
import CardImg from "./CardImg";
import CardBody from "./CardBody";

const Card = () => {
    return (
        <StyledCard>
            <CardImg />
            <CardBody />
        </StyledCard>
    );
};

export default Card;
