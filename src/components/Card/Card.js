import React from "react"
import { StyledCard } from "./Card.styled"
import { CardImg, CardBody, CardTitle, CardText } from "../Card"

const Card = (props) => {
    return <StyledCard style={props.style}>{props.children}</StyledCard>
}

export default Object.assign(Card, {
    Img: CardImg,
    Body: CardBody,
    Title: CardTitle,
    Text: CardText,
})
