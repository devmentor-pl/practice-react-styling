import React from "react";
import StyledCardBody from "./CardBody.styled";
import { StyledButton } from "./../Button/Button.styled";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const CardBody = () => {
    return (
        <StyledCardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </CardText>
            <StyledButton variant={"#007BFE"} size={"150px"}>
                Go somewhere
            </StyledButton>
        </StyledCardBody>
    );
};

export default CardBody;
