import React from 'react';
import StyledCardBody from './CardBody.styled';
import CardTitle from './CardTitle';
import CardText from './CardText';
import Button from './../Button/Button';

const CardBody = () => {
    return(
        <StyledCardBody>
            <CardTitle/>
            <CardText/>
            <Button>Go Somewhere</Button>
        </StyledCardBody>
    )
}

export default CardBody;