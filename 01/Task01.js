import React from 'react';
import { ThemeProvider, css } from 'styled-components';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

// czy używanie css zamiast obiektu różni się czymś więcej niż tylko łatwością zapisu? 
const themeSettings = {
    primary: css`
        background-color: #3cb371;
        color: #0c2518;
    `,
    secondary: css`
        background-color: lightblue;
        color: darkblue;
    `,
};

const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert variant='primary'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </RBAlert>
            </Col>
            <Col>
                <ThemeProvider theme={themeSettings}>
                    <Alert variant='primary'>
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </Alert>
                </ThemeProvider>
            </Col>
        </Row>
    );
};

export default Task01;
