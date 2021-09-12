import React from 'react';
import {ThemeProvider} from 'styled-components';
import themeSettings from './../src/components/Alert/styled/theme';
import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert variant="secondary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={themeSettings}>
                    <Alert variant="secondary">Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task01;

