import React from "react";

import { Row, Col, Card as RBCard, Button as RBButton } from "react-bootstrap";
import MyCard from "./../src/components/Card/MyCard";

const Task04 = () => {
  return (
    <Row>
      <Col>
        <RBCard style={{ width: "18rem" }}>
          <RBCard.Img variant="top" src="https://picsum.photos/100/80" />
          <RBCard.Body>
            <RBCard.Title>Card Title</RBCard.Title>
            <RBCard.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </RBCard.Text>
            <RBButton variant="primary">Go somewhere</RBButton>
          </RBCard.Body>
        </RBCard>
      </Col>
      <Col>
        <MyCard></MyCard>
      </Col>
    </Row>
  );
};

export default Task04;
