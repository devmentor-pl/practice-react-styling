import React from 'react';
import CardTitle from './Cardtitle'
import CardText from './CardText'
import {StyledCardBody} from './MainCard.styled'
import Button from '../../components/Button'




const CardBody = () => {
    return (
        <StyledCardBody>
            <CardTitle/>
            <CardText/>
            <Button variant="primary" size="lg" disabled = "disabled" active="active">Go somewhere</Button>
        </StyledCardBody>
    )

}


export default CardBody