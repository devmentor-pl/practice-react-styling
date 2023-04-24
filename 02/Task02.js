import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
      <Row>
        <Col>
          <RBButton variant="success" size="lg">
            Button!
          </RBButton>
        </Col>
        <Col>
          <Button variant="success" size="lg">
            Button!
          </Button>
        </Col>
      </Row>
    );
}

export default Task02;

