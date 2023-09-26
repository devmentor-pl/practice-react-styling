import React from "react";

import Body from "./Body"
import Title from "./Title"
import Text from "./Text"
import Img from "./Img"

import StyledCard from "./StyledElements/StyledCard";

const Card = ({style, children}) => {
    return (
        <StyledCard style={style}>{children}</StyledCard>
    )
}

export default Object.assign(Card, {
    Img: Img,
    Body: Body,
    Title: Title,
    Text: Text,
});
