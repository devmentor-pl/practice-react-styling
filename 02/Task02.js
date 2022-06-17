import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

import { ThemeProvider } from "styled-components";
import { themeButtonsVariants } from "../src/components/styled/theme";

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={themeButtonsVariants.primary}>
          <Button size="lg" active>
            Button!
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={themeButtonsVariants.dark}>
          <Button size="sm" disabled>
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;

