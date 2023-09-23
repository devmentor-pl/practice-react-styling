import React from 'react';
import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';
import themeSettings from '../src/components/Button/theme'
import { ThemeProvider } from 'styled-components';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
                <ThemeProvider theme={themeSettings}>
                    <Button variant="primary" > Button!</Button>
                </ThemeProvider>
            </Col>
        </Row>
)
}

export default Task02;

