import React from 'react';

import { Row, Col, Card as RBCard, Button as RBButton } from 'react-bootstrap';
import Card from '../src/components/Card';
import Button from '../src/components/Button';

const Task05 = () => {
    return (
        <Row>
            <Col>
                <RBCard style={{ width: '18rem' }}>
                    <RBCard.Img variant='bottom' src='https://picsum.photos/100/80' />
                    <RBCard.Body>
                        <RBCard.Title>Card Title</RBCard.Title>
                        <RBCard.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </RBCard.Text>
                        <RBButton variant='primary'>Go somewhere</RBButton>
                    </RBCard.Body>
                </RBCard>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src='https://picsum.photos/100/80' alt='random photo' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </Card.Text>
                        <Button value='Go somewhere' variant='secondary' />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Task05;
