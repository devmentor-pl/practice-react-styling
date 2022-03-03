import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
    return (
        <Row>
            <Col>
                <RBAlert variant='primary'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </RBAlert>
            </Col>
            <Col>
                <Alert>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='secondary'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='success'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='danger'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='warning'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='info'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='light'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
                <Alert variant='dark'>
                    Uwaga! <em>Styled Components</em> nadchodzi!
                </Alert>
            </Col>
        </Row>
    );
};

export default Task01;
