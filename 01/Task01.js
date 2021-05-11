import React from "react";

import Alert from "./../src/components/Alert";
import { Row, Col, Alert as RBAlert } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import themeVariants from "./../src/components/Alert/themes";

const Task01 = () => {
  return (
    <ThemeProvider theme={themeVariants}>
      <Row>
        <Col>
          <RBAlert variant="primary">
            Uwaga! <em>Styled Components</em> nadchodzi!
          </RBAlert>
        </Col>
        <Col>
          <Alert variant={"danger"}>
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </Col>
      </Row>
    </ThemeProvider>
  );
};

export default Task01;
