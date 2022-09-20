import React from "react";
import styled from 'styled-components';

import CardBody from "./CardBody";
import CardImg from "./CardImg";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import Button from '../Button/index';

const StyledCard = styled.section`
    width:18rem;
    height:26rem;
    border:1px solid rgb(174,183,200);
    border-radius:5px;
`

const Card = ({children}) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Object.assign(Card, {
    Img: CardImg,
    Body: CardBody,
    Title: CardTitle,
    Text: CardText,
    Button:Button,
});