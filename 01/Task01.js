import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../src/components/Alert/theme'

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={theme}>
                    <Alert>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task01;

