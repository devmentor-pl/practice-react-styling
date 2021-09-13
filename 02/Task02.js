import React from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeSettings from '../src/components/Button/styles/ThemeSettings02';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
                <ThemeProvider theme={ThemeSettings}>
                    <Button variant='primary' size='lg'>Button!</Button>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task02;