import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

import { ThemeProvider } from "styled-components";
import { themeAlertsVariants } from "../src/components/styled/theme";

const Task01 = () => {
  return (
    <Row>
      <Col>
        <RBAlert variant="primary">
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <ThemeProvider theme={themeAlertsVariants.success}>
          <Alert>
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </ThemeProvider>
        <ThemeProvider theme={themeAlertsVariants.warning}>
          <Alert>
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task01;

