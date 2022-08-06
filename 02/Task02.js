import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';



const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
              <Button variant="primary" size="lg" disabled = "disabled" active="active">Button!</Button>
            </Col>
        </Row>
)
}

export default Task02;

