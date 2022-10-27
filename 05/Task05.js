import React from 'react';
import { Row, Col, Card as RBCard, Button as RBButton } from 'react-bootstrap';
import Card from './../src/components/Card/Card';
import Button from './../src/components/Button/Button';
import themeSettings from './../src/components/Button/styled/theme';
import {ThemeProvider} from 'styled-components';

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
	                <Card.Img src="https://picsum.photos/100/80" />
	                <Card.Body>
		                <Card.Title>Card Title</Card.Title>
		                <Card.Text>Some quick example text to build on the card title and make up the bulk of
			                the card's content.</Card.Text>
		                <ThemeProvider theme={themeSettings}>
			                <Button variant="primary" active>Go somewhere</Button>
		                </ThemeProvider>
	                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Task05;

