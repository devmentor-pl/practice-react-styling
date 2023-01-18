import React from "react";
import { StyledDiv } from "./Card.styled";

const CardBody = props => {
    return (
        <StyledDiv style={{padding: '1.25rem'}}>{props.children}</StyledDiv>
    )
}

export default CardBody