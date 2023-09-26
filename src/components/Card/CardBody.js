import React from "react";
import { StyledCardBody } from "./Card.styled";

const CardBody = (props) => {
    return <StyledCardBody>{props.children}</StyledCardBody>
}

export default CardBody