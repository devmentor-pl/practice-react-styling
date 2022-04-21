import React from 'react';

import { Row, Col, Card as RBCard, Button as RBButton} from 'react-bootstrap';
import {Card,CardImg,CardBody,CardTitle,CardText} from './../src/components/Card';
import Button from '../src/components/Button';

const Task05 = () => {
    return (
        <Row>
            <Col>
                <RBCard style={{ width: '18rem' }}>
                    <RBCard.Img variant="top" src="https://picsum.photos/100/80" />
                    <RBCard.Body>
                        <RBCard.Title>Card Title</RBCard.Title>
                        <RBCard.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </RBCard.Text>
                        <RBButton variant="primary">Go somewhere</RBButton>
                    </RBCard.Body>
                </RBCard>
            </Col>
            <Col>
                <Card>
                    <CardImg src="https://picsum.photos/100/80"></CardImg>
                    <CardBody>
                        <CardTitle>Card Title</CardTitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </CardText>
                        <Button variant="success" style={{margin:'0 0'}}>Go somewhere</Button> 
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Task05;

// <Button variant="success" size='small'>Go somewhere</Button>  - mogę tutaj dodać jeszcze style? 
//Probówałam nadpisać dodać styled tak: <Button variant="success" size='small' style={{color:'red',padding:'0 0'}}>Go somewhere</Button>  
// ale się nie nadpisuje

