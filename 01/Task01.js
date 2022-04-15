import React from "react";
import { ThemeProvider } from "styled-components";

import Alert from "./../src/components/Alert";
import { Row, Col, Alert as RBAlert } from "react-bootstrap";

import themeSettings from "../src/components/Alert/styled/theme01";

const Task01 = () => {
  return (
    <Row>
      <Col>
        <RBAlert variant="primary">
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <ThemeProvider theme={themeSettings}>
          <Alert variant="primary">
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task01;
