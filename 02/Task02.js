import React from "react";

import Button from "./../src/components/Button/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import buttonThemeVariants from "./../src/components/Button/themes";

const Task02 = () => {
  return (
    <ThemeProvider theme={buttonThemeVariants}>
      <Row>
        <Col>
          <RBButton variant="primary" size="lg">
            Button!
          </RBButton>
        </Col>
        <Col>
          <Button variant={"success"} size={"sm"} disable={true}>
            Button!
          </Button>
        </Col>
      </Row>
    </ThemeProvider>
  );
};

export default Task02;
