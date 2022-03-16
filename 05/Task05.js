import React from 'react';

import { Row, Col, Card as RBCard, Button as RBButton } from 'react-bootstrap';
import Button from '../src/components/Button';
import Card from '../src/components/Card/Card';
import CardBody from '../src/components/Card/CardBody';
import CardImg from '../src/components/Card/CardImg';
import CardText from '../src/components/Card/CardText';
import CardTitle from '../src/components/Card/CardTitle';

const Task04 = () => {
  return (
    <Row>
      <Col>
        <RBCard style={{ width: '18rem' }}>
          <RBCard.Img variant='top' src='https://picsum.photos/100/80' />
          <RBCard.Body>
            <RBCard.Title>Card Title</RBCard.Title>
            <RBCard.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </RBCard.Text>
            <RBButton variant='primary'>Go somewhere</RBButton>
          </RBCard.Body>
        </RBCard>
      </Col>
      <Col>
        <Card>
          <CardImg src='https://picsum.photos/100/80' />
          <CardBody>
            <CardTitle>Tytuł</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Text</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Task04;
