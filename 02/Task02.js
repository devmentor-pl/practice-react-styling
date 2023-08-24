import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

import { ThemeProvider } from 'styled-components'
import theme from '../src/components/styled/theme'

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
                <ThemeProvider theme={theme}>
                    <Button variant="primary" size="lg" disabled={false}>Button!</Button>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task02;

