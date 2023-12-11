import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
  const theme = {
    primary: '#007bff',
    secondary: '#6c757d',
    default: '#343a40',
  };
  return (
    <Row>
      <Col>
        <RBAlert variant="primary">
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <Alert variant="secondary" theme={theme}>
          Uwaga! <em>Styled Components</em> nadchodzi!
        </Alert>
      </Col>
    </Row>
  );
};

export default Task01;
