import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./../src/styled/buttonTheme";

import Button from "./../src/components/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="warning" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={theme}>
          <Button variant="warning" size="lg">
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;

