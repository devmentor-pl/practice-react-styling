import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import themeSettings from '../src/components/Button/theme.js'

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <ThemeProvider theme={themeSettings}>
             {/* <Col>
                    <Button variant="secondary" size="sm">Button!</Button>
                </Col> */}
                <Col>
                    <Button variant="primary" size="lg">Button!</Button>
                </Col>
            </ThemeProvider>
        </Row>
    )
}

export default Task02;

