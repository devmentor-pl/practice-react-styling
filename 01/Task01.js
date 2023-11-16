import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import themeSettings from '../src/components/Alert/theme.js'

const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <ThemeProvider theme={themeSettings}>
            {/* <Col>
                    <Alert>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </Col>
                <Col>
                    <Alert variant="secondary">Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </Col> */}
                <Col>
                    <Alert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </Col>
           </ThemeProvider>
        </Row>
    )
}

export default Task01;

