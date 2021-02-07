import React from 'react';

import Card from './../src/components/Card/Card';
import CardImg from './../src/components/Card/CardImg';
import CardBody from './../src/components/Card/CardBody';
import CardTitle from './../src/components/Card/CardTitle';
import CardText from './../src/components/Card/CardText';
import Button from './../src/components/Button/Button';

import { Row, Col, Card as RBCard, Button as RBButton } from 'react-bootstrap';

const Task04 = () => {
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
                <Card style={{ width: '18rem' }}>
                    <CardImg src="https://picsum.photos/100/80" />
                    <CardBody>
                        <CardTitle>Card Title</CardTitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </CardText>
                        <Button variant="primary" size='lg'>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Task04;

