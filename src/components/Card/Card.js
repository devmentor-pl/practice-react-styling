import React from "react";
import { StyledCard, CardImageTop, CardBody, CardTitle, CardText, Button} from "./Card.styled";

const Card = () => {
    return (
        <StyledCard>
            <CardImageTop src="https://picsum.photos/100/80" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </CardText>
                <Button>Go somewhere</Button>
            </CardBody>
        </StyledCard>
    )
}

export default Card;