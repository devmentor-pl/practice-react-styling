import React from 'react';
import CardBody from './CardBody'
import CardImg from './CardImg'
import CardTitle from './CardTitle'
import CardText from './CardText'

import StyledCard from './Card.styled'

const Card = props => {
    const {children, style} = props;
    return (
        <StyledCard style={style}>
            {children}
        </StyledCard>
    )
}

Card.Body = CardBody;
Card.Img = CardImg
Card.Title = CardTitle;
Card.Text = CardText;

export default Card