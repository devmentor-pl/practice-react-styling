import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from '../src/components/Button/theme.js'
import Card from '../src/components/Card/Card.js';
import CardBody from '../src/components/Card/CardBody.js';
import CardImg from '../src/components/Card/CardImg.js';
import CardText from '../src/components/Card/CardText.js';
import CardTitle from '../src/components/Card/CardTitle.js';
import Button from '../src/components/Button/Button.js';

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
                <Card>
                    <CardImg src="https://picsum.photos/100/80" />
                    <CardBody>
                       <CardTitle>Card Title</CardTitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </CardText>
                        <ThemeProvider theme={themeSettings}>
                            <Button variant="primary">Go somewhere</Button>   
                        </ThemeProvider>
                    </CardBody> 
                </Card>
            </Col>
        </Row>
    )
}

export default Task04;

