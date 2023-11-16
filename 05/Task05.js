import React from 'react';

import Card from '../src/components/Card/Card'

import { Row, Col, Card as RBCard, Button as RBButton, CardImg, Button } from 'react-bootstrap';

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
                    <Card.Img src='https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg' alt='duck' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text> Some quick example text to build on the card title and make up the bulk of
                            the card 's content.</Card.Text>
                        <Card.Button variant='primary' size='lg' isActive={true} content='Read more...'></Card.Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Task05;

