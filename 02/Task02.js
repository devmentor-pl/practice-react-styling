import React from 'react';

import Button from './../src/components/Button/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
                <RBButton variant="secondary" size="sm">Button!</RBButton>
            </Col>
            <Col>
                <Button variant="primary" size="sm" disabled>Button!</Button>
                <Button variant="secondary" size="sm" active>Button!</Button>
                <Button variant="primary" size="sm">Button!</Button>
                <Button size="lg">Button!</Button>
            </Col>
        </Row>
)
}

export default Task02;

