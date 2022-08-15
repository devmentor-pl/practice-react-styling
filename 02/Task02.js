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
                <Button variant='primary' size='lg'>Primary</Button>{' '}
                <Button variant='secondary' size='lg'>Secondary</Button>{' '}
                <Button variant='primary' size='sm'>Button size=sm</Button>{' '}
                <Button variant='primary' size='sm' active>Button active</Button>{' '}
                <Button variant='primary' size='sm' disabled>Button disbaled</Button>{' '}
            </Col>
        </Row>
)
}

export default Task02;

