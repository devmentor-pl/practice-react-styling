import React from 'react';
import { ThemeProvider } from 'styled-components';
import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    const themeSettings = {
        primary: {
            color: '#004085',
            backgroundColor: '#CCE5FF',
            border: '1px solid #B8DAFF',
        },
        secondary: {
            color: '#383D41',
            backgroundColor: '#E2E3E5',
            border: '1px solid #D6D8DB',
        }

    }
    return (
        <Row>
            <Col>
                <RBAlert variant="primary">Uwaga! <em>Styled Components</em> nadchodzi!</RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={themeSettings}>
                    <Alert variant='primary'>Uwaga! <em>Styled Components</em> nadchodzi!</Alert>
                </ThemeProvider>
            </Col>
        </Row>
    )
}

export default Task01;

