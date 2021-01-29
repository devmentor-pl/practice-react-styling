import React from 'react';
import CardImg from './CardImg'
import CardBody from './CardBody'
import {StyledCard} from './MainCard.styled'




const Card = () => {
    return (
        <StyledCard>
            <CardImg/>
            <CardBody/>
        </StyledCard>
    )

}


export default Card