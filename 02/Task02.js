import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant='primary'>Button!</RBButton>
            </Col>
            <Col>
                <Button variant='primary' size='lg' active>
                    Button!
                </Button>
                <Button variant='secondary' size='sm' disabled>
                    Button!
                </Button>

                <Button variant='success'>Button!</Button>
                <Button variant='warning'>Button!</Button>
                <Button variant='danger'>Button!</Button>
                <Button variant='info'>Button!</Button>
                <Button variant='light'>Button!</Button>
                <Button variant='dark'>Button!</Button>
                <Button variant='link'>Button!</Button>
            </Col>
        </Row>
    );
};

export default Task02;
