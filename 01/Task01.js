import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';

const Task01 = () => {
    const primary = {
        color: '#004085',
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff'
    }

    return (
        <Row>
            <Col>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={ primary }>
                    <Alert>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task01;

