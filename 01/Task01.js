import React from 'react';
import { ThemeProvider } from 'styled-components';
import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    const themeSettings = {
        primary: {
            color: '#6EA8FE',
            backgroundColor: '#031633',
            border: '1px solid #084298',
        },
        secondary: {
            color: '#A7ACB1',
            backgroundColor: '#161719',
            border: '1px solid #41464B',
        }

    }
    return (
        <Row>
            <Col>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={themeSettings}>
                    <Alert >Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task01;

